
import './App.css'
import SelectInput from './Components/SelectInput'
import timeZones from '../public/timeZone.json'
import { useState } from 'react'
import { deepCopy } from './utils/object';


const init = {
	ownTime: {
		name: "UTC+00:00",
		offset: 0,
		abbreviation: "UTC",
	},
	client1: { name: "UTC+00:00", offset: 0, abbreviation: "UTC" },
};
function App() {
  const [clockInfo, setClockInfo] = useState(deepCopy(init));
  
  const convertTime = (e) => {
      console.log(clockInfo)
  }


  
  return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "20px 0px",
				}}
			>
				<p>this is app</p>
				<div>
					<SelectInput onChange={convertTime}>
						<option value=''>Select Your Time Zone</option>
						{timeZones.map(timeZone => (
							<option
								key={timeZone.name}
								value={timeZone.offset}
							>
								{timeZone.name}
							</option>
						))}
					</SelectInput>
				</div>
			</div>
		</>
  );
}

export default App
