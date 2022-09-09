From python:3.8-alpine
ENV PYTHONBUFFERED 1
WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .