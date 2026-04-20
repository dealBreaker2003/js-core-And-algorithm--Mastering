# 题目 ：实现基础快速排序

**题目描述**：
给你一个整数数组 `nums`，请你使用快速排序将其升序排列。
**示例**：

- 输入：`nums = [5,2,3,1]`
- 输出：`[1,2,3,5]`
**思考点**：如何实现 `partition`（分区）操作？

```javaScript
const quickSelect = (nums = [], k = 0) => {
    const targetIndex = nums.length - k
    const selectIndex = (L, R) => {
        const base = nums[R]
        let cur = L
        for (let i = L; i < R; i++) {
            if (nums[i] < base) {
                //  小于标准先拿到前面
                [nums[cur], nums[i]] = [nums[i], nums[cur]]
                //  左指针前进一步
                cur++
            }
        }
        //  标准归位
        [nums[cur], nums[R]] = [nums[R], nums[cur]]
        //  判断标准是否命中
        if (cur === targetIndex) {
            return nums[cur]
        } else if (cur < targetIndex) {
            //  小了，去右半区
            return selectIndex(cur + 1, R)
        } else {
            //  大了，去左半区
            return selectIndex(L, cur - 1)
        }
    }
    return selectIndex(0, nums.length - 1)
}
```
