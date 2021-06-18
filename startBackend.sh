#!/bin/bash

echo "Iniciando o backend..."
docker container exec angular-crud bash -c "cd /usr/src/app/backend; npm i; npm start; exit"
sleep 1
