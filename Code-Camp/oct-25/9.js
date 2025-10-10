
/**
 * you will be given a date in the format "YYYY-MM-DD" and need to determine the
 * phase of the moon for that day using the following rules:
 * Use a simplified lunar cycle of 28 days, divided into four equal phases:
 * 
 * "New": days 1 - 7
 * "Waxing": days 8 - 14
 * "Full": days 15 - 21
 * "Waning": days 22 - 28
 * After day 28, the cycle repeats with day 1, a new moon.
 * Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the
 * phase of the given day.
 * @author Jonathan Reyes
 * @param {*} dateString 
 * @returns {string} 
 */
function moonPhase(dateString) {
  let dayCounter = 0
  let lunarPhase = ''

  const milisFromDate = Date.parse(dateString)
  const milisReferenceDate = Date.parse('2000-01-06')
  let elapsedMilis = milisFromDate - milisReferenceDate
  
  const milisToDays = (milis) => {
    const seconds = milis / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    return days
  }

  const daysElapsed = milisToDays(elapsedMilis)

  for(let n = 0; n <= daysElapsed; n++){
    dayCounter ++
    if(dayCounter === 28) dayCounter = 0
  }

  if(dayCounter >= 1 && dayCounter <= 7) lunarPhase = 'New'
  if(dayCounter >= 8 && dayCounter <= 14) lunarPhase = 'Waxing'
  if(dayCounter >= 15 && dayCounter <= 21) lunarPhase = 'Full'
  if(dayCounter >= 22 && dayCounter <= 28) lunarPhase = 'Waning'

  return lunarPhase
}

// console.log(moonPhase("2014-10-15"))
/**
 * Tests
Passed:1. moonPhase("2000-01-12") should return "New".
Passed:2. moonPhase("2000-01-13") should return "Waxing".
Passed:3. moonPhase("2014-10-15") should return "Full".
Passed:4. moonPhase("2012-10-21") should return "Waning".
Passed:5. moonPhase("2022-12-14") should return "New".
 */