function calculate() {
    const numFixedPulleys = document.getElementById('numFixedPulleys').value;
    const numMovablePulleys = document.getElementById('numMovablePulleys').value;
  
    if (numFixedPulleys === '' || numMovablePulleys === '') {
      alert('Please fill in all fields');
      return;
    }
  
    const mechanicalAdvantage = parseInt(numMovablePulleys) + 1;
    const velocityRatio = 2 * parseInt(numMovablePulleys) + parseInt(numFixedPulleys);
  
    document.getElementById('result').innerHTML = `
      <p>Mechanical Advantage: ${mechanicalAdvantage}</p>
      <p>Velocity Ratio: ${velocityRatio}</p>
    `;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input');
  
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.backgroundColor = '#ffe4b2';
      });
      input.addEventListener('blur', () => {
        input.style.backgroundColor = 'transparent';
      });
    });
  });
  