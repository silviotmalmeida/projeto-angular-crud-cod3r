#!/bin/bash

echo "Iniciando o frontend..."
docker container exec angular-crud bash -c "cd /usr/src/app/frontend; npm i; npm start"
sleep 1
