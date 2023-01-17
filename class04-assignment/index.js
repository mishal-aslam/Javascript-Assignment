const dailtRoutine = (callback1 ,callback2 , callback3 , callback4) => {
    console.log("Ready for school at 8am");
    callback1()
    console.log("Sitting on school bus");
    callback2()
    console.log("Attending classes");
    callback3()
    console.log("Returning home");
    callback4()
}
 dailtRoutine(
    function callback1() {
              console.log("Brushed teeth and had breakfast");
            },
            function callback2() {
              console.log("Listened to music on the bus ride");
            },
            function callback3() {
              console.log("Learned about math and science");
            },
            function callback4() {
              console.log("Ate dinner and did homework in js");
            }
 )