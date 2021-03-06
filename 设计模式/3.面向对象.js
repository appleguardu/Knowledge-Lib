/**
 * 面向对象编程是一种编程范式或编程风格。
 * 它以类或对象作为组织代码的基本单元，并将封装、抽象、继承、多态四个特性，作为代码设计和实现的基石;
 * 面向对象编程时候，我们是在思考，如何给业务建模，如何将真实的世界映射为类或者对象，这让我们更加能聚焦到业务本身
 */

// 封装:
// 封装也叫作信息隐藏或者数据访问保护。类通过暴露有限的访问接口，授权外部仅能通过类提供的方方法（或者叫函数）来访问内部信息或者数据

// 继承
// 代码复用, 复制特性

// 多态
// 多态是指，子类可以替换父类，在实际的代码运行过程中，调用子类的方法实现
// duck-typing 实现多态的方式非常灵活, 只要两个类具有相同的方法，就可以实现多态, 通过同一个函数来调用其方法
// 多个类具有同一行为

// 优势:
// 对于大规模复杂程序的开发，程序的处理流程并非单一的一条主线，而是错综复杂的网状结构。
// 面向对象编程比起面向过程编程，更能应对这种复杂类型的程序开发。
// 面向对象编程相比面向过程编程，具有更加丰富的特性（封装、抽象、继承、多态）。利用这些特性编写出来的代码，更加易扩展、易复用、易维护。

// 一个抽象功能开发的面向对象分析:

// 面向对象分析可以粗略地看成“需求分析”, 实际上, 不管是需求分析还是面向对象分析,我们首先要做的都是将笼统的需求细化到足够清晰、可执行。
// 我们需要通过沟通、挖掘、分析、假设、梳理，搞清楚具体的需求有哪些，哪些是现在要做的，哪些是未来可能要做的，哪些是不用考虑做的

// 如何进行面向对象设计:

// 面向对象分析的产出是详细的需求描述，那面向对象设计的产出就是类。在面向对象设计环节，我们将需求描述转化为具体的类的设计。
// 我们把这一设计环节拆解细化一下，主要包含以下几个部分:

// 1.划分职责进而识别出有哪些类；
    // 将需求先简单划分成几个小的、独立的功能模块，然后再在模块内部，应用我们刚刚讲的方法，进行面向对象设计
// 2.定义类及其属性和方法；
    // 属性: 数据
    // 方法: 函数
// 3.定义类与类之间的交互关系；
    // 泛化、实现、关联、聚合、组合、依赖
// 4.将类组装起来并提供执行入口