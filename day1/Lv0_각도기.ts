//조건: 0 < angle <= 180, angle은 정수
//예각 : 0 < angle < 90    => 1 return
//직각 : angle = 90        => 2 return
//둔각 : 90 < angle < 180  => 3 return
//평각 : angle = 180       => 4 return

function protractor(angle: number): number {
        if(angle === 180) return 4;

        if(angle > 90 && angle < 180) return 3;
        
        if(angle === 90) return 2;
        
        return  1;
    }

console.log(protractor(64));
console.log(protractor(90));
console.log(protractor(165));
console.log(protractor(180));