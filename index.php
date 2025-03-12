<?php
//1

function removeDuplicates($array1,$array2){
$mergedArray=array_merge($array1,$array2);
$uniqueArray=array_unique($mergedArray);
return $uniqueArray;
}
$result=removeDuplicates(array("apple","banana","cherry"),array("banana","cherry","date","fig"));
print_r($result);


// 2
function occuranceOfWord($str){
    $str=strtolower($str);
    $pos=strpos($str,"php")+1;
    echo "the word php first appears at the position of:$pos";
}
occuranceOfWord("i love coding in php because php is powerful.");

// 3
function divisibilityCheck($num){
    if($num%3==0){
     
        if($num%5==0){
            echo"$num is divisible by 3 and 5 \n";
            exit;
        }
        echo"$num is divisible only by 3";
        exit;
    }
    if($num%5==0){
        echo"$num is divisible only by 5 \n";
    }
    else{
        echo"$num is divisible by neither 3 nor 5\n";
    }
    
}
divisibilityCheck(10);

// 4
$students = array("101" => "John", "102" => "Emma", "103" => "Lucas");
function searchingKey($arr,$searchName){
return $value=array_search($searchName,$arr);
}
$resultValue=searchingKey($students,"Emma");
print_r($resultValue);

// 5

function reverseString($str){
    $reversed='';
    for($i=strlen($str)-1;$i>=0;$i--){
$reversed=$reversed.$str[$i];
    }
    return $reversed;
}
echo reverseString("hello world ");


?>
