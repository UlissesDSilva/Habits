# Habits - Esse projeto serve como fonte de estudo


### Prisma
Prisma é um ORM que otimiza o acesso ao banco de dados
Tudo que for escrito para o banco, seja query, criação de tabelas, pode ser feito a portabilidade para MySQL, Postgress, Mongo, etc

# - Comandos Prisma
    - npx prisma init --datasource-provider SQLite => Para iniciar o prisma informando que será usado o banco de dados do tipo SQLite
    - npx prisma migrate dev => Lê o o schema.prisma a partir das ultimas alterações e cria o que for necessário no banco
    - npx prisma studio => Interface para navegar pelo banco