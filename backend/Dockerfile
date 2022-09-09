From python:3.10-alpine
ENV PYTHONBUFFERED 1
WORKDIR /backend
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
