# faas-node-ascii
A [FaaS](http://get-faas.com) function to generate a shortened URL via an [external service](http://subr.pw)

You can execute the function like this:

`curl http://localhost:8080/function/url-shortener -d "2017.dockercon.com"`

(or use the FaaS UI to send the URL)

![](https://pbs.twimg.com/media/C9yhdnPV0AAZSRC.jpg)

## Installation

You can either install `faas-node-url-shortener` via your FaaS compose file or you can add it via the UI.

Please note that this function requires internet access to query the external API to shorten the URL.

### Compose file

Add this to `docker-compose.yml` and then redeploy the stack

```Dockerfile
ascii:
    image: developius/faas-node-url-shortener:latest
    labels:
        function: "true"
    depends_on:
        - gateway
    networks:
        - functions
    environment:
        no_proxy: "gateway"
        https_proxy: $https_proxy
```

`docker stack deploy -c docker-compose.yml func`

### UI

Hit the `CREATE NEW FUNCTION` button and add these details:

- Image: `developius/faas-node-url-shortener:latest`
- Service name: `ascii`
- fProcess: `node /app/index.js`
- Network: `func_functions`

Hit create!
