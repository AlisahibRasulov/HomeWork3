// ! task1

function printNumbers(){
    for(i = 0; i < 10; i++){
        console.log(i);
    }
}

printNumbers();

// ! task2

console.log('--------------');

let nums = [[1,2,3],[4,5,6]];

function printEven(){
    for(i = 0; i < nums.length; i++){
        for(j=0;j<nums[i].length;j++){
            if(nums[i][j] % 2 == 0){
                console.log(nums[i][j])
            }
        }
    }
};

printEven();

// ! task3

console.log('--------------');

// cons printPattern = function(){
//     for()
// }

function printPattern(){
    for(let i=0;i<=5;i++){
        let s = "";
        for(let j=1;j<=i;j++){
            s += j;
        }
       
        console.log(s)
    }
}
printPattern();

