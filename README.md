# Happy Swing

## Run it

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/) in your browser

## Use MQTT and the Node-RED generator

Run the mqtt broker and data generator with

```bash
docker compose up
````

Then open [http://localhost:18083/](http://localhost:18083/). The default username is `admin` and the password is `public`.

The Node-RED editor is available at [http://localhost:1880/](http://localhost:1880/).

Test it via, you need to have `mqttx` installed.

```bash
mqttx sub -t 's' -h 'localhost' -p 1883
```

## Data analysis

[Data Sheet](https://docs.google.com/spreadsheets/d/1t-OPvkTPE99zK_tjjw-HukC4o4GXhHTFxQlcWT3e9Us/edit)
