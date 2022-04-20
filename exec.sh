#!/usr/bin/env bash
docker build -t rental-car-app .
docker run --init -p 3000:3000 -it rental-car-app