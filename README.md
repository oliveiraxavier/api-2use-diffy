## Credits
Credits for  maintainers of project https://github.com/opendiffy/diffy
Créditos aos mantenedores do projeto https://github.com/opendiffy/diffy

## Start

### Baseados em nas Apis, v1 e v2
```
$ docker run -p 9000:8080 -it oxmarcos/api-hello:1.0.1
$ docker run -p 9001:8080 -it oxmarcos/api-hello:1.0.2
```

### A api v2 possui respostas diferentes para os endpoints "/bye" e "/hello" e um novo endpoint "bye-v2" para os testes com https://github.com/opendiffy/diffy

- Na raiz desse projeto execute 
```
$ docker compose up
```

- Acesse o painel do diffy  http://localhost:8888/

- Realize algumas requisições curl ou http (sudo apt install httpie no Ubuntu)

## With curl
```curl
# api v1 primary
curl -i -H Canonical-Resource:ATUAL-PRIMARY   http://localhost:8880/hello
curl -i -H Canonical-Resource:ATUAL-PRIMARY   http://localhost:8880/bye

# api v1 secondary
curl -i -H Canonical-Resource:ATUAL-SECONDARY http://localhost:8880/hello
curl -i -H Canonical-Resource:ATUAL-SECONDARY http://localhost:8880/bye

# api new version
curl -i -H Canonical-Resource:NOVA-VERSÃO     http://localhost:8880/hello
curl -i -H Canonical-Resource:NOVA-VERSÃO     http://localhost:8880/bye
curl -i -H Canonical-Resource:NOVA-VERSÃO     http://localhost:8880/bye-v2
```


## With http

```httpie
# api v1 primary
http http://localhost:8880/hello Canonical-Resource:ATUAL-PRIMARY
http http://localhost:8880/bye Canonical-Resource:ATUAL-PRIMARY

# api v1 secondary
http http://localhost:8880/hello Canonical-Resource:ATUAL-SECONDARY
http http://localhost:8880/bye Canonical-Resource:ATUAL-SECONDARY

# api new version
http http://localhost:8880/hello Canonical-Resource:NOVA-VERSÃO
http http://localhost:8880/bye Canonical-Resource:NOVA-VERSÃO
http http://localhost:8880/bye-v2 Canonical-Resource:NOVA-VERSÃO
```

## Exemplo de empresas que utilizaram em migrações de api
https://blog.twitter.com/engineering/en_us/a/2015/diffy-testing-services-without-writing-tests.html
https://somos.globo.com/blog/globotech/noticia/globotech-blog-60percent-menos-custo-nova-tecnologia-e-zero-downtime.ghtml
https://engineering.mixpanel.com/safely-rewriting-mixpanels-highest-throughput-service-in-golang-mixpanel-engineering-62cd69b5ebdb

- Canary citado aqui
https://www.infoq.com/presentations/airbnb-services-scalability/ 
