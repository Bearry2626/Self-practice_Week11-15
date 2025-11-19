// 1. input parameter - emty
const today1 = new Date()
console.log(today1)
// z = แสดงเวลาตามมาตราญานสากลาง UTC

// 2. รinput parameter - number of milliswcond
const now = Date(Date.now())
console.log(now)

// 3. input parameter - string
const dateString = new Date("2025-05-02T17:15:35.100") // เวลา local Date time 
console.log(dateString)
const myDate2 = new Date("2025-05-02T17:15:35.100z")
console.log(myDate2) // .ใส่้ z = เวลา UTC Date time 

// 4. input parameter - year, monthIndex (0-11), day , hh ,mm,s,,ms
const myDate3 = new Date(2025,1,2,18,15,0,150)
console.log(myDate3) 


// จัด Format ไม่ได้
// 1. toString()
console.log(myDate3.toString()) 


// 2. toISOString()
console.log(myDate3.toISOString())

// จัด Format ได้ / option
// 3.toLocaleString()
console.log(myDate3.toLocaleString())
console.log(
    myDate3.toLocaleString("th-TH",{
        dateStyle: "short",
        timeStyle: "short",
    })
)
// 4.Intl.DateTimeFormat()
const formatter = Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
})
console.log(formatter.format(myDate3))


// resolveOption()
const userPreference = Intl.DateTimeFormat

const openTime = new Date('2025-11-19T12:00:00')
const closeTime = new Date('2025-11-20T12:00:00')
const myBookingTime = new Date('2025-11-20T11:59:00')
const aTime = new Date('2025-11-19T12:00:00')

// using > < >= <= with date object (convert to millisecton automatically before comparing)
if (openTime < closeTime)
    console.log("open time")
else console.log("clodetime")

// not using === to check the same time because === compares reforecce og object
if(openTime === aTime) console.log("opentime is the same as atime")
else console.log("opentime is not the same")

//when you want to compare both date objects are the same, using getTime() function
if (openTime.getTime() === aTime.getTime())
  //getTime - return millisecond of date object
  console.log("both openTime and aTime are the same ") //both openTime and aTime are the same
 