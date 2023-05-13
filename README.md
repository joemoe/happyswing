# Happy Swing

## Run it

```
python3 -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/) in your browser


## Use MQTT

Run the docker container with

```
docker run -d --name emqx -p 1883:1883 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083 emqx
````

Then open [http://localhost:18083/](http://localhost:18083/)

Test it via, you need to have `mqttx` installed.

```
mqttx sub -t 's' -h '172.20.10.4' -p 1883
```

Check your ip and update it in `config.js`.


## Data analysis

[Data Sheet](https://docs.google.com/spreadsheets/d/1t-OPvkTPE99zK_tjjw-HukC4o4GXhHTFxQlcWT3e9Us/edit)