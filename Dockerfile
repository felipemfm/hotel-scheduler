FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /django_app

COPY ./Pipfile /django_app/Pipfile
COPY ./Pipfile.lock /django_app/Pipfile.lock
RUN python -m pip install --upgrade pip
RUN pip install pipenv
RUN pipenv install --dev
COPY . /django_app/
# CMD ["/django_app/.venv/bin/python", "manage.py", "runserver", "0.0.0.0:8000"]