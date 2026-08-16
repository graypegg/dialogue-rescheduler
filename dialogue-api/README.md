# dialogue-api

And this is just a big rails API-only app!

Sorry to throw this on you! It should be quite easy to get going if you happen to have a copy of Ruby 4 installed locally, however if not, there's a docker file that should start the service on the correct port as well!

```shell
cd ./dialogue-api
docker build -t dialogue_api-dev .
docker run --rm -p 3000:3000 dialogue_api-dev
```

That should get it running on port 3000. The vite proxy in `dialogue-ui` will be able to ping that.
