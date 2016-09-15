
export class Welcome {
  heading = 'Welcome to the DHEX App!';
  fullName = '';

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
