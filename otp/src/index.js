function onPincodeEntered(pin) {
  console.log("Pin entered", pin);
}

window.pinSdk.init(
  {
    id: "pincode",
    len: 4,
  },
  onPincodeEntered
);
