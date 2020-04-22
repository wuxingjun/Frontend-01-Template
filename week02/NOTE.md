# 备忘
## InputElement
### WhiteSpace 空白
- <tab>
- <VT>
- <FF> Form Feed
- <SP> 
- <NBSP>
- <USP>
### LineTerminator
- <LF> Line Feed \n 换行
- <CR> \r 回车
- <LS>
- <PS>
### Comment 注释
- //
- /**/
###  Token
#### Punctuator 符号
#### IdentifierName
- Identifier标识符
1. 变量名
1. 属性
- Keywords关键字(Future Reserved:enum)
#### Literal 直接量
- Number
- String
- Boolean
- Null
- Undefined
# 关于作业
## 作业1 
这里写得太复杂了，按照十进制整数、浮点数、科学技术法、二进制、八进制、十六进制分别判断，然后整合，由于对正则不够熟练，不知道怎么简化

```
//整数
^[+-]?\d+$
//浮点数
^[+-]?\d*\.\d+$
^[+-]?\d+\.\d*$
//科学技术法
^[+-]?\d*\.?\d+[Ee][+-]?\d+$
^[+-]?\d+\.?\d*[Ee][+-]?\d+$
//16进制
^[+-]?0[Xx][0-9A-Fa-f]+$
//2进制
^[+-]?0[Bb][01]+$
//8进制
^[+-]?0[Oo][0-7]+$/
```

## 作业2

Unicode | UTF8
---|---
0000 0000-0000 007F | 0xxxxxxx
0000 0080-0000 07FF | 110xxxxx 10xxxxxx
0000 0800-0000 FFFF |1110xxxx 10xxxxxx 10xxxxxx
0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx


## 作业3
没啥思路，直接看PPT答案的
- \u2028 LINE SEPARATOR
- \u2029 PARAGRAPH SEPARATOR
- (?:x) 非捕获 	匹配 'x' 但是不记住匹配项

```
"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"
```

