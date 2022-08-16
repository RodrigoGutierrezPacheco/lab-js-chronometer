class Chronometer {
  constructor() {
   this.currentTime = 0;
	 this.intervalId = null;
  }

  start(printTimeCallback){
    this.intervalId = setInterval(()=>{
			this.currentTime+=1;
			if(printTimeCallback){
				printTimeCallback();
			}
		},1000);
  }
	

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
  return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
   if (value < 10){
		return "0" + value;
	 }
	 return `${value}`;
  }

  stop() {
     clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
		return this.currentTime=0;
  }

  split() {
    // ... your code goes here
    const min = this.getMinutes();
		const sec = this.getSeconds();
		this.computeTwoDigitNumber(min),
		this.computeTwoDigitNumber(sec)

		let minutosFormateados = this.computeTwoDigitNumber(min);
		let segundosFormateados = this.computeTwoDigitNumber(sec);

		return minutosFormateados+":"+segundosFormateados;
		
};

}