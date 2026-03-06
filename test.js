class myPromise {
  constructor(executor) {
    this.state = "pending";
    this.result = null;
    this.reason = null;

    const resolve = (val) => {
      if (val instanceof myPromise) {
        return val.then(resolve);
      }
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.result = val;
      }
    };

    const reject = () => {
      this.state = "rejected";
      this.result = null;
    };
    if (executor) executor(resolve, reject);
  }

  //  实例方法：
  then(val) {}

  //  静态方法：
  //  静态resolve
  static myResolve(val) {
    //  嵌套处理如果已经是一个promise的情况
    if (val instanceof myPromise) {
      return val;
      // return val.then(resolve, reject);
    }
    //  真正意义上创建一个被解决的promise，用传入的数据结合内部的方法
    return new myPromise((resolve) => {
      resolve(val);
    });
  }

  //  手写promise静态方法：
  //  接受一个可迭代对象     返回一个promise  当所有接受的promise都被兑现时候   这个promise也被兑现   同时返回包含所有被兑现的promise的返回值的数组
  //  接受一个对象/数组   返回一个数组
  //  任意一个输入的promise被拒绝   大promise也被拒绝rejected   并且带有第一个被拒绝的promise的reason

  // static all(iterable) {
  //   return new myPromise((resolve, reject) => {
  //     const length = Array.from(iterable).length;
  //     const waitResult = Array(length);
  //     const pendings = new Map();
  //     let count = 1;

  //     if (length === 0) return resolve([]);
  //     //  工具函数
  //     //  更新自己返回后的值，保持插入顺序
  //     const addSelf = (item) => {
  //       item.then(
  //         (result) => {
  //           pendings.set(item, result);
  //           count++;
  //           if (count === length) resolve(getReturn);
  //         },
  //         (reason) => {
  //           reject(new Error("错误:", reason));
  //         },
  //       );
  //     };

  //     const getArr = (key) => waitResult.push(pendings.get(key));
  //     const getReturn = () => pendings.forEach(getArr);

  //     //  遍历读取，释放函数
  //     const replaceSelf = (key) => {
  //       pendings.get(key);
  //     };

  //     //  业务逻辑
  //     //  对每个promise操作
  //     iterable.forEach((item) => {
  //       pendings.set(item, addSelf(item));
  //     });

  //     //  最后统一操作
  //     try {
  //       pendings.forEach(replaceSelf);
  //     } catch (error) {}
  //   });
  // }

  static myAll(iterable) {
    return new myPromise((resolve, reject) => {
      const promises = Array.from(iterable);
      const length = promises.length;
      const returnArr = Array(length);
      let count = 0;

      if (length === 0) return resolve([]);

      promises.forEach((item, index) => {
        //  包装每一个item，静态方法兼顾非promise元素
        myPromise.myResolve(item).then(
          (val) => {
            returnArr[index] = { status: "fulfilled", value: val };
            count++;
            if (count === length) resolve(returnArr);
          },
          (reason) => {
            reject(reason);
          },
        );
      });
    });
  }

  // 手写allsettled
  static myAllSettled(iterable) {
    return new myPromise((resolve, reject) => {
      const promises = Array.from(iterable);
      const length = promises.length;
      const returnArr = Array(length);
      let count = 0;

      if (length === 0) return resolve([]);

      promises.forEach((item, index) => {
        //  包装每一个item，静态方法兼顾非promise元素
        myPromise.myResolve(item).then(
          (val) => {
            returnArr[index] = { status: "fulfilled", value: val };
            count++;
            if (count === length) resolve(returnArr);
          },
          (reason) => {
            returnArr[index] = { status: "rejected", value: reason }; //   可以补位一个占位图，如果处理图片场景
            count++;
            if (count === length) resolve(returnArr);
          },
        );
      });
    });
  }

  //  手写race
  //  接受一个可迭代对象  返回一个promise
  //  这个promise的状态（兑现或拒绝） 由可迭代对象中第一个兑现的元素敲定
  static myRace = (iterable) => {
    return new myPromise((resolve, reject) => {
      for (const item of iterable) {
        myPromise.myResolve(item).then(resolve, reject);
      }
    });
  };

  //  手写any
  //  race变种
  static myAny = (iterable) => {
    return new myPromise((resolve, reject) => {
      const promises = Array.from(iterable);
      const length = promises.length;
      const errorsGet = Array(length);
      let rejectedCount = 0;

      if (length === 0) return reject(new Error("Empty iterable"));
      promises.forEach((item, i) => {
        myPromise.myResolve(item).then(
          (value) => resolve(value),
          (reason) => {
            errorsGet[i] = { status: "rejected", value: reason };
            rejectedCount++;
            if (rejectedCount === length) {
              reject("And Then There Were None!", errorsGet);
            }
          },
        );
      });
    });
  };
}

// 手写map
//  原数组 每个元素 调用一次提供的函数之后 加入新数组  返回一个新数组
const myMap = (arr = [], callback, thisArg) => {
  const newArr = new Array(arr.length);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    //  键值对检查
    if (i in arr) {
      newArr[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }
  return newArr;
};

//  节流
//  防抖
//  函数柯里化

// const curriedLog = (date) => (type) => (message) => {
//   console.log(`${date}:${type}:${message}`);
// };

// const curriedDate = (date) => {
//   console.log(`${date}`);
// };
// const curriedType = (type) => {};

// 柯里化后的 log 函数（简化版逻辑）
const curriedLog = (date) => (type) => (message) => {
  console.log(`[${date}] [${type}] : ${message}`);
};

// 第一步：锁定日期（生成一个“今天的日志器”）
const logToday = curriedLog("2026-03-07");

// 第二步：锁定类型（生成一个“今天的 DEBUG 专用日志器”）
const debugToday = logToday("DEBUG");
const errorToday = logToday("ERROR");

// 第三步：只需传信息，逻辑起飞！
debugToday("内存正常"); // 输出: [2026-03-07] [DEBUG] : 内存正常
debugToday("CPU正常"); // 输出: [2026-03-07] [DEBUG] : CPU正常
errorToday("系统崩溃"); // 输出: [2026-03-07] [ERROR] : 系统崩溃
