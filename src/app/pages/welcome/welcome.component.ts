import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.less"],
})
export class WelcomeComponent implements OnInit {
  arr = [1, 2, 3, 2, 1];

  arr0 = [1, 2, "a", 1, 3, 4, 5, "c", 4, 3, 3, "1", "a", "b", "c"];
  arr1 = ["a", "b", "a"];
  arr2 = [1, 2, 2, 3, 5, 3, 6, 5];
  arrs = [[222, 333, 444], [55, 66, 77], 11, [[1], [21, 22], 3]];
  constructor() {}

  ngOnInit() {
    this.arrDemension();

    const arr = [];
    // for (let i = 0; i < this.arr.length; i++) {
    //   const elementi = this.arr[i];
    //   for (let j = i + 1; j < this.arr.length; j++) {
    //     const elementj = this.arr[j];
    //     if (elementi === elementj) {
    //       i++;
    //       j = i;
    //       // j = ++i;
    //     }
    //   }
    //   arr.push(elementi);
    // }

    /* for (let i = 0; i < this.arr.length; i++) {
      let elementi = this.arr[i];
      for (let j = i + 1; j < this.arr.length; j++) {
        let elementj = this.arr[j];
        if (elementi === elementj) {
          // if (this.arr[i] === this.arr[j]) {
          i++;
          j = i;
        }
      }

      arr.push(elementi);
      // arr.push(this.arr[i]);
    } */

    // console.log("arr1---------------", arr);

    const newArr = [];

    /*  for (let i = 0; i < this.arr.length; i++) {
      const element = arr[i];
      if (newArr.indexOf(element) === -1) {
        newArr.push(element);
      }
    }

    for (const item of this.arr) {
      if (newArr.indexOf(item) === -1) {
        newArr.push(item);
      }
    } */

    /*
    方法一  最简单
    * 新建一新数组，遍历传入数组，值不在新数组就push进该新数组中
    * IE8以下不支持数组的indexOf方法
    * */
    // this.arr.forEach(item => {
    //   if (newArr.indexOf(item) === -1) {
    //     newArr.push(item);
    //   }
    // });

    const arrTemp = this.arr;

    // 思路：获取没重复的最右一值放入新数组
    /*
     * 推荐的方法 二
     *
     * 方法的实现代码相当酷炫，
     * 实现思路：获取没重复的最右一值放入新数组。
     * （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）*/
    for (let i = 0; i < arrTemp.length; i++) {
      for (let j = i + 1; j < arrTemp.length; j++) {
        if (arrTemp[i] === arrTemp[j]) {
          // j = ++i;
          i++;
          j = i;
        }
      }

      newArr.push(arrTemp[i]);
    }

    // console.log("newArr---", newArr);

    // 方法三 ES6新的数据结构Set，类似于数组，它的元素都是唯一的。
    // console.log("ES6新的数据结构Set---", [...new Set(this.arr)]);
  }

  // 数组 降纬
  arrDemension() {
    // 方法一 利用数组与字符串的隐式转换，使用+符号链接一个对象，javascript会默认调用toString方法转为字符串，再使用字符串分割成字符串数组，最后转成数值形数组

    const oneArrString = this.arrs + ""; // "222", "333", "444", "55", "66", "77", "11", "1", "21", "22", "3"
    const oneStringArr = oneArrString.split(",").map((v) => Number(v));

    // 方法二 两纬数组可以 多维不行
    const concatApplyArr = Array.prototype.concat.apply([], this.arrs); // [222, 333, 444, 55, 66, 77, 11, Array(1), Array(2), 3]

    // 方法三 推荐使用，经测试这个是执行效率最高的。

    // console.log("-- arrUtils---", this.arrUtils(this.arrs));
  }

  arrUtils(arr) {
    let arrs = [];

    const arrTest = function (arr) {
      arr.forEach((item) => {
        item instanceof Array ? arrTest(item) : arrs.push(item);
      });
    };

    arrTest(arr);

    return arrs;
  }
}
