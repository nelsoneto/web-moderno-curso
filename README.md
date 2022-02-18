# Web Moderno com JavaScript 2020 COMPLETO + Projetos

Para mais informações acessar https://www.cod3r.com.br/courses/web-moderno

# Resolvendo problema de execução npm start com error 'http-server' não é reconhecido como um comando
 
Você quer subir o servidor, pelo que percebo. Mas da forma que está fazendo não está correta. pois você não possui um programa http-server.

1º passo - Instale o node, disponível em https://nodejs.org/en

2º passo - Pelo terminal ou prompt de comando acesse a pasta onde você descompactou o .zip (acesse o terminal, vá ate a pasta onde se encontra o index do teu projeto e copia o endereço. algo como isto 'C:\Users\Desktop\ceep-pwa-0.1' no terminal digite cd e cole oendereço copiadodo Ex: cd C:\Users\Desktop\ceep-pwa-0.1

agora você esta dentro do dieretório.

3º passo - execute o seguinte comando para instalar o servidor: npm install -g http-server

4º passo - após a instalação, execute o comando http-server para rodar o servidor.

Acho que assim você resolve.

Para mim subiu de primeira. C:\Users\Vendas 1\Desktop\ceep-pwa-0.1>http-server Starting up http-server, serving ./ Available on: http://192.168.25.161:8080 http://127.0.0.1:8080 Hit CTRL-C to stop the server