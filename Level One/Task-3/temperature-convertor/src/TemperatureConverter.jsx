import React, { useState } from 'react';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('celsius');
  const [convertedTemperature, setConvertedTemperature] = useState(null);

  const handleChange = (event) => {
    setTemperature(event.target.value);
  };

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  function handleConvert() {
    if (temperature !== '') {
      const convertedTemp = calculateConvertedTemperature(temperature, selectedUnit);
      setConvertedTemperature(convertedTemp);
    }
  }

  function calculateConvertedTemperature(temp, unit) {
    if (unit === 'celsius') {
      return (temp * 9 / 5) + 32; // Celsius to Fahrenheit
    } else {
      return (temp - 32) * 5 / 9; // Fahrenheit to Celsius
    }
  }

  return (
    <div className='temp-body'>
      <div id="msform">
        <fieldset>
          <h2 className="fs-title">Temperature Converter</h2>
          <h3 className="fs-subtitle">Enter the temperature and select the unit to convert.</h3>
          <div className="flex items-center space-x-4">
            <label htmlFor="temperature" className="text-lg font-medium">Enter temperature:</label>
            <input
              type="number"
              id="temperature"
              value={temperature}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
            <label htmlFor="type" className="text-lg font-medium">Type:</label> <br />
            <select
              id="unit"
              value={selectedUnit}
              onChange={handleUnitChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleConvert}
            className="action-button"
          >Convert
          </button>
          {convertedTemperature && (
            <div className="answer" style={{ marginTop: '10px' }}>
              {convertedTemperature} {selectedUnit === 'celsius' ? 'Fahrenheit' : 'Celsius'}
            </div>
          )}

        </fieldset>
      </div>
    </div>
  );
}

export default TemperatureConverter;

