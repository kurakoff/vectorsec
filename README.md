# VectorSec

## Требования

- [Git](https://git-scm.com/downloads)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (включает Docker Compose)

## Быстрый старт

```bash
# 1. Склонировать репозиторий
git clone https://github.com/kurakoff/vectorsec.git
cd vectorsec

# 2. Создать файл переменных окружения
cp .env.example .env

# 3. Запустить все сервисы
docker compose up --build
```

После запуска:
- Сайт: http://localhost
- API: http://localhost/api/health

Остановить:
```bash
docker compose down
```

## Подключение к базе данных

По умолчанию `.env` настроен на **удалённую БД** (продакшен сервер). Все разработчики работают с одной общей базой.

Переключение режима — в файле `.env`:

```bash
# Удалённая БД (по умолчанию) — общие данные с продакшеном:
DATABASE_URL=postgresql+asyncpg://vectorsec:vectorsec@168.222.143.5:5432/vectorsec

# Локальная БД — своя пустая база в Docker:
# DATABASE_URL=postgresql+asyncpg://vectorsec:vectorsec@db:5432/vectorsec
```

После смены — перезапустить:
```bash
docker compose up --build
```

## Деплой на сервер

**Push в `main` — основной и единственный способ заливки на продакшен.** Не нужно заходить на сервер, ничего руками запускать. Просто пушишь — и через ~20 секунд изменения уже на сервере.

```bash
# Посмотреть что изменилось
git status

# Закоммитить
git add .
git commit -m "Описание изменений"

# Запушить — автоматически задеплоит на сервер
git push origin main
```

> **Важно:** каждый push в `main` запускает автодеплой. Пушь только проверенный код.

## Работа с базой данных

### Локальная БД

```bash
docker compose exec db psql -U vectorsec -d vectorsec
```

### Удалённая БД (сервер)

```bash
# Подключиться к серверу
ssh root@168.222.143.5

# Зайти в psql
cd ~/vectorsec
docker compose exec db psql -U vectorsec -d vectorsec
```

### SQL-команды

```sql
-- Список таблиц
\dt

-- Структура таблицы
\d items

-- Все записи
SELECT * FROM items;

-- Добавить запись
INSERT INTO items (name, description) VALUES ('Test', 'Описание');

-- Обновить
UPDATE items SET name = 'New name' WHERE id = 1;

-- Удалить
DELETE FROM items WHERE id = 1;

-- Выход
\q
```

### Сбросить локальную БД

```bash
docker compose down -v
docker compose up --build
```

## Структура проекта

```
vectorsec/
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   │   ├── App.tsx    # Главный компонент
│   │   ├── main.tsx   # Точка входа
│   │   └── App.css    # Стили
│   └── Dockerfile
├── backend/           # FastAPI + Python
│   ├── app/
│   │   ├── main.py    # Роуты API
│   │   ├── database.py# Подключение к БД
│   │   └── models.py  # Модели таблиц
│   └── Dockerfile
├── nginx/             # Reverse proxy
│   └── nginx.conf
└── docker-compose.yml
```

## Добавление новой модели

### 1. Модель в `backend/app/models.py`

```python
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False)
    name = Column(String(255), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
```

### 2. Эндпоинт в `backend/app/main.py`

```python
from .models import Item, User

@app.get("/api/users")
async def get_users(db: AsyncSession = Depends(get_db)):
    result = await db.execute(text("SELECT * FROM users"))
    return result.mappings().all()
```

### 3. Перезапустить — таблица создастся автоматически

```bash
docker compose up --build
```

## Полезные команды

```bash
# Логи сервиса
docker compose logs backend
docker compose logs frontend
docker compose logs db

# Логи в реальном времени
docker compose logs -f backend

# Перезапустить один сервис
docker compose restart backend

# Пересобрать всё
docker compose up --build -d
```
