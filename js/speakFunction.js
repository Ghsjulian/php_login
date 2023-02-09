export function speakFunction(getCmd) {
	if ('speechSynthesis' in window) {
		var speaker = window.speechSynthesis;
		let command = getCmd;
		console.log(getCmd);
		var toSpeak = new SpeechSynthesisUtterance(command);
		var voices = speaker.getVoices();
		toSpeak.voice = voices[8];
		toSpeak.pitch = 1.4;
		toSpeak.rate = 0.9;
		toSpeak.volume = 10;
		toSpeak.lang = "en-US";
		speaker.speak(toSpeak);
	} else {
		console.log("Speech Doesn't Support");
	}
}

