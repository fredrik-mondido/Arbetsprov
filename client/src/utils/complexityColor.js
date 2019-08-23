const complexityColor = complexity => {
    if (complexity > 7) return 'complexity--red';
    if (complexity > 4) return 'complexity--yellow';
    return 'complexity--green';
}

export default complexityColor;