module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      "feat",   // 新功能
      "fix",  // bug修复  
      "docs",   // 文档说明 
      "style",  // 样式
      "refactor",  // 功能重构
      "perf",   // 性能优化
      "test",   // 单元测试
      "chore",  // 添加依赖库
      "revert" 
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
};