#! bin/bash

git clone https://github.com/TawanLander/ProjetoPI-2026-01;

cd ProjetoPI-2026-01;

cd API\ WEB\ DATA\ VIZ

cat > .env <<EOF

AMBIENTE_PROCESSO=producao

DB_HOST= '127.0.0.1'
DB_DATABASE='PI2UTI'
DB_USER=${1}
DB_PASSWORD=${2}
DB_PORT= 3307 

APP_PORT= 3333
APP_HOST= '127.0.0.1

EOF

cd ..

cd Banco\ de\ Dados

mysql -u root -p "${3}" < main.sql
