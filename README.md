[![gkatemplatew](https://user-images.githubusercontent.com/10385585/28489021-a9cc83aa-6eea-11e7-8c1b-4bb326bb9fe9.png)](https://github.com/joeyguo/gka)

## gka-tpl-cs

<a href="https://www.npmjs.org/package/gka-tpl-cs"><img src="https://img.shields.io/npm/v/gka-tpl-cs.svg?style=flat"></a>
<a href="https://github.com/joeyguo/gka-tpl-cs#license"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>

[gka](https://github.com/joeyguo/gka) 文件生成模板，一键式生成 css keyframes 序列帧动画文件，并内置优化。

[在线示例](https://gkajs.github.io/gka-tpl-cs/example/gka.html)  [示例代码](https://github.com/gkajs/gka-tpl-cs/tree/master/example)

### 内置优化

- 开启图片裁剪优化 ✓
- 开启合图优化 ✓
- 开启相同帧图片复用 ✓

# Install

```sh
$ sudo npm install -g gka                # install gka
```

# Usage

```sh
$ gka <dir> -t cs [options]
```

# Example

```sh
$ gka E:\gka-test\img -t cs
```

<table>
    <thead>
        <tr><th>Before</th><th>After</th></tr>
    </thead>
    <tbody>
        <tr>
            <td><pre><code>
./img
├── hello-01.png
├── hello-02.png
├── hello-03.png
├── hello-04.png
├── hello-05.png
└── ...
</code></pre></td>
<td><pre><code>
./gka-img
└── gka.html
└── gka.css
└── img
    └── sprites.png
</code></pre></td>
        </tr>
    </tbody>
</table>

# Use GKA

[https://github.com/joeyguo/gka](https://github.com/joeyguo/gka)

