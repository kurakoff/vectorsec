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

## Работа с кодом

```bash
# Создать новую ветку (опционально)
git checkout -b feature/my-feature

# Внести изменения в код...

# Посмотреть что изменилось
git status
git diff

# Закоммитить
git add .
git commit -m "Описание изменений"

# Запушить в main (запускает автодеплой на сервер)
git push origin main
```

> **Важно:** каждый push в `main` автоматически деплоит изменения на продакшен сервер.

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

## Работа с базой данных

### Локальная БД (у тебя на компьютере)

```bash
# Зайти в psql внутри контейнера
docker compose exec db psql -U vectorsec -d vectorsec
```

### Удалённая БД (на сервере продакшена)

```bash
# Подключиться к серверу
ssh root@168.222.143.5

# Зайти в psql на сервере
cd ~/vectorsec
docker compose exec db psql -U vectorsec -d vectorsec
```

### Полезные SQL-команды

```sql
-- Список таблиц
\dt

-- Структура таблицы
\d items

-- Посмотреть все записи
SELECT * FROM items;

-- Добавить запись
INSERT INTO items (name, description) VALUES ('Test', 'Описание');

-- Обновить запись
UPDATE items SET name = 'New name' WHERE id = 1;

-- Удалить запись
DELETE FROM items WHERE id = 1;

-- Выйти из psql
\q
```

### Сброс базы данных

```bash
# Остановить и удалить volume с данными
docker compose down -v

# Запустить заново (БД создастся с нуля)
docker compose up --build
```

## Добавление новой модели в БД

### 1. Создать модель в `backend/app/models.py`

```python
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False)
    name = Column(String(255), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
```

### 2. Добавить API-эндпоинт в `backend/app/main.py`

```python
from .models import Item, User  # добавить User в импорт

@app.get("/api/users")
async def get_users(db: AsyncSession = Depends(get_db)):
    result = await db.execute(text("SELECT * FROM users"))
    return result.mappings().all()
```

### 3. Перезапустить

```bash
docker compose up --build
```

Таблица создастся автоматически при старте.

## Полезные команды

```bash
# Логи всех сервисов
docker compose logs

# Логи конкретного сервиса
docker compose logs backend
docker compose logs frontend
docker compose logs db

# Логи в реальном времени
docker compose logs -f backend

# Перезапустить один сервис
docker compose restart backend

# Пересобрать и перезапустить
docker compose up --build -d
```
