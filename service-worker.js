importScripts("https://js.pusher.com/beams/service-worker.js");
<script>
  const beamsClient = new PusherPushNotifications.Client({
    instanceId: 'ba0b8cf5-ede1-42cb-a526-a5be09800235',
  });

  beamsClient.start()
    .then(() => beamsClient.addDeviceInterest('hello'))
    .then(() => console.log('Successfully registered and subscribed!'))
    .catch(console.error);
</script>