const {
    src,       //來源
    dest,      //目的地
    series,    //執行完A任務再執行B任務
    parallel,  //同時執行任務
    watch      //監看   //以上五個為gulp原生方法，剩下要靠套件安裝後才能用 //同步
} = require('gulp');

//宣告任務
function defaultTask(cb) {
    console.log('hello gulp4');
    cb();
}

//執行任務
exports.do = defaultTask;




//搬家任務  *指令 在終端機輸入 gulp copy //copy為檔名、可隨意更改
function move(){
    return src('dev/*.*').pipe(dest('dist'));  //src -> 來源 dest -> 目的地    //第一* 指全部檔名、第二* 全部類型
}

//執行任務
exports.copy = move