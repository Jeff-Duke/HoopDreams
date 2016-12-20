const options = {
  pieOptions: {
    margin: {
      top: 20,
      left: 10,
      right: 20,
      bottom: 20
    },
    width: 350,
    height: 350,
    color: '#d7001e',
    r: 50,
    R: 150,
    legendPosition: 'top',
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 3
    },
    label: {
      fontFamily: 'Arial',
      fontSize: 10,
      fontWeight: true,
      color: '#ECF0F1'
    },
    submitButton: {
      height: 50,
      alignSelf: 'stretch',
      backgroundColor: '#D9DADF',
      margin: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  radarOptions: {
    width: 290,
    height: 290,
    margin: {
      top: 20,
      left: 20,
      right: 30,
      bottom: 20
    },
    r: 150,
    max: 100,
    fill: "#2980B9",
    stroke: "#2980B9",
    animate: {
      type: 'oneByOne',
      duration: 200
    },
    label: {
      fontFamily: 'Arial',
      fontSize: 14,
      fontWeight: true,
      fill: '#34495E'
    }
  }
};

export default options;
