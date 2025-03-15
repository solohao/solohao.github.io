import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, BookOpen, BarChart2, Zap, Users, FileText, Award, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="PPT Genius Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold">PPT Genius</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </a>
            <a href="#workflow" className="text-sm font-medium hover:underline underline-offset-4">
              Workflow
            </a>
            <a href="#advantages" className="text-sm font-medium hover:underline underline-offset-4">
              Advantages
            </a>
            <a href="#roadmap" className="text-sm font-medium hover:underline underline-offset-4">
              Roadmap
            </a>
          </nav>
          <div>
            <Button>Try Demo</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  专为高校学生设计
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  PPT Genius: 你的AI创作教练
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  通过分步引导、逻辑诊断和学术资源整合，从模糊主题到完整答辩PPT，平均耗时≤30分钟
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    开始创作 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    查看演示
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="PPT Genius Interface Preview"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="w-full py-12 md:py-24 bg-white" id="pain-points">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">行业现状与痛点</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">现有AI PPT工具的局限性</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  当前AI PPT工具普遍存在"重结果、轻过程"的缺陷，尤其针对学生群体
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-red-100 text-red-600">
                      <FileText className="h-5 w-5" />
                    </span>
                    交互割裂
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">单次输入生成全稿，无法分步调整逻辑与设计</p>
                  <blockquote className="mt-4 border-l-4 border-gray-200 pl-4 italic text-gray-600">
                    "AI生成后还要自己重做一半，不如不用"
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-amber-100 text-amber-600">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    教育缺失
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">缺乏对PPT底层逻辑（如SCQA模型）的实时指导</p>
                  <blockquote className="mt-4 border-l-4 border-gray-200 pl-4 italic text-gray-600">
                    "答辩被批结构混乱，但AI没提醒"
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-blue-100 text-blue-600">
                      <BarChart2 className="h-5 w-5" />
                    </span>
                    资源分散
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">数据查找、图表制作需跳转多个平台</p>
                  <blockquote className="mt-4 border-l-4 border-gray-200 pl-4 italic text-gray-600">
                    "查资料半小时，做PPT十分钟"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Target Users Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">目标用户</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">为谁而设计</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  面向高校学生的"PPT创作教练"，满足不同场景的专业需求
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-green-100 text-green-600">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    课程作业
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">典型场景</p>
                  <p className="text-gray-500">期末汇报、小组课题展示</p>
                  <p className="font-medium mt-4">核心需求</p>
                  <p className="text-gray-500">快速生成符合学术规范的简洁版式</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-purple-100 text-purple-600">
                      <Award className="h-5 w-5" />
                    </span>
                    竞赛答辩
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">典型场景</p>
                  <p className="text-gray-500">创新创业大赛、学术竞赛</p>
                  <p className="font-medium mt-4">核心需求</p>
                  <p className="text-gray-500">动态数据可视化与逻辑严谨性</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="p-2 rounded-full bg-orange-100 text-orange-600">
                      <Users className="h-5 w-5" />
                    </span>
                    学生组织
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">典型场景</p>
                  <p className="text-gray-500">社团招新、活动策划提案</p>
                  <p className="font-medium mt-4">核心需求</p>
                  <p className="text-gray-500">品牌VI植入与视觉冲击力设计</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="w-full py-12 md:py-24 bg-white" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">核心功能</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">三大核心功能模块</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  从需求挖掘到资源整合，全方位提升PPT创作体验
                </p>
              </div>
            </div>

            <Tabs defaultValue="guide" className="mt-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="guide">智能问答引导</TabsTrigger>
                <TabsTrigger value="logic">逻辑诊断系统</TabsTrigger>
                <TabsTrigger value="resources">学术资源直连</TabsTrigger>
              </TabsList>
              <TabsContent value="guide" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold">多维度需求挖掘</h3>
                    <p className="mt-2 text-gray-500">
                      通过7个标准化问题（如"是否需要强调方法论创新性？"）生成《需求匹配报告》
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>建议内容深度（基础科普/专业研究）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>视觉风格倾向（严谨学术/创意设计）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>数据引用规范（APA/MLA/GB/T）</span>
                      </li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-8">案例即时推荐</h3>
                    <p className="mt-2 text-gray-500">输入"互联网+大赛"自动关联3个国赛金奖PPT框架，支持一键套用。</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="智能问答引导界面"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="logic" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold">智能检测维度</h3>
                    <p className="mt-2 text-gray-500">自动分析PPT逻辑结构，提供针对性优化建议</p>

                    <div className="mt-4 bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
                        <code>
                          {`def logic_check(ppt):
    # 逻辑连贯性：章节过渡是否存在断层？
    if transition_page_missing(ppt): 
        return "建议在第3页后添加过渡页解释技术路径"
        
    # 论据充分性：核心论点是否有数据支撑？
    if data_coverage < 60%: 
        return "商业模式页需补充用户调研数据（已推荐3篇知网文献）"`}
                        </code>
                      </pre>
                    </div>

                    <p className="mt-4 text-gray-500">
                      系统会实时检测PPT的逻辑连贯性、论据充分性和结构平衡性，确保演示内容符合学术标准。
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="逻辑诊断系统界面"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="resources" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold">学术资源整合</h3>
                    <p className="mt-2 text-gray-500">一站式整合多平台学术资源，无需频繁切换工具</p>

                    <div className="mt-4 overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2 px-4 text-left">资源类型</th>
                            <th className="py-2 px-4 text-left">对接平台</th>
                            <th className="py-2 px-4 text-left">功能示例</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-4">文献数据</td>
                            <td className="py-2 px-4">知网/万方</td>
                            <td className="py-2 px-4">输入"Z世代消费行为"推荐10篇高引论文</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-4">图表生成</td>
                            <td className="py-2 px-4">Flourish/镝数</td>
                            <td className="py-2 px-4">自动将Excel数据转化为动态条形图</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">版权素材</td>
                            <td className="py-2 px-4">Pexels/IconPark</td>
                            <td className="py-2 px-4">根据"碳中和"主题推荐光伏电站实拍图片</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="学术资源直连界面"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50" id="workflow">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">操作流程</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">用户操作流程</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  从需求定义到成品导出，全流程AI辅助
                </p>
              </div>
            </div>

            <div className="mt-12 relative">
              <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-0.5 bg-gray-200 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3 md:ml-auto">
                    1
                  </div>
                  <h3 className="text-xl font-bold">需求定义</h3>
                  <p className="mt-2 text-gray-500">回答7个标准化问题，系统生成《需求匹配报告》</p>
                  <div className="mt-3 p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">
                      Q1: "是否需要对比欧盟《AI法案》与中国规范？" → 勾选"政策对比"标签
                      <br />
                      Q2: "受众对技术的了解程度？" → 选择"计算机学院本科生"
                    </p>
                  </div>
                </div>

                <div className="md:mt-32">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                    2
                  </div>
                  <h3 className="text-xl font-bold">逻辑优化</h3>
                  <p className="mt-2 text-gray-500">系统检测内容逻辑，提供优化建议</p>
                  <div className="mt-3 p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">
                      系统检测到"伦理风险"章节仅文字描述 → 推荐插入MIT技术伦理树状图
                      <br />
                      自动在"参考文献"页生成APA格式引用（来自用户上传的PDF批注）
                    </p>
                  </div>
                </div>

                <div className="md:text-right">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3 md:ml-auto">
                    3
                  </div>
                  <h3 className="text-xl font-bold">设计调整</h3>
                  <p className="mt-2 text-gray-500">选择模板并进行个性化设计调整</p>
                  <div className="mt-3 p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">
                      选择"学术极简"模板后，AI将用户上传的课程封面配色同步至图表配色
                      <br />
                      在"致谢"页推荐插入团队合照框架，并提供拍摄构图建议
                    </p>
                  </div>
                </div>

                <div className="md:mt-32">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                    4
                  </div>
                  <h3 className="text-xl font-bold">成品导出</h3>
                  <p className="mt-2 text-gray-500">导出PPT文件，同时获取《逻辑优化指南》</p>
                  <div className="mt-3 p-3 bg-white rounded-lg shadow-sm">
                    <p className="text-sm text-gray-600">
                      支持多种格式导出：PPTX、PDF、在线演示链接
                      <br />
                      附赠《演讲技巧指南》，针对PPT内容提供演讲建议
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">技术实现</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">技术栈与开发计划</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  采用先进技术栈，确保高效稳定的用户体验
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-xl font-bold mb-4">技术栈</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">交互层</h4>
                      <p className="text-gray-500">React + Ant Design（高校用户熟悉度最高）</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">AI核心</h4>
                      <p className="text-gray-500">Fine-tuned GPT-4 + 文生图模型Stable Diffusion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-green-100 text-green-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">资源对接</h4>
                      <p className="text-gray-500">知网OpenAPI + 钉钉小程序云数据库</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="roadmap">
                <h3 className="text-xl font-bold mb-4">MVP开发里程碑</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-blue-600">核心功能</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-500">2023-10-01</div>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        <div className="ml-2 text-sm">需求定义模块</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-500">2023-11-01</div>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                        <div className="ml-2 text-sm">逻辑诊断引擎</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-500">2023-11-20</div>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <div className="ml-2 text-sm">学术资源网关</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-purple-600">测试迭代</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-500">2024-01-01</div>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <div className="ml-2 text-sm">高校种子用户内测</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 text-sm text-gray-500">2024-01-15</div>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                        <div className="ml-2 text-sm">A/B测试优化</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50" id="advantages">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">竞争优势</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">差异化价值与未来规划</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  相比传统AI PPT工具，PPT Genius提供更全面的创作体验
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-6 text-left">维度</th>
                      <th className="py-3 px-6 text-left">传统AI PPT</th>
                      <th className="py-3 px-6 text-left">PPT Genius</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">交互方式</td>
                      <td className="py-3 px-6 text-gray-500">单次输入生成</td>
                      <td className="py-3 px-6 text-blue-600 font-medium">分步骤引导创作</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-6 font-medium">教育价值</td>
                      <td className="py-3 px-6 text-gray-500">仅提供模板</td>
                      <td className="py-3 px-6 text-blue-600 font-medium">输出《逻辑优化指南》</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 font-medium">资源整合</td>
                      <td className="py-3 px-6 text-gray-500">需手动插入图表</td>
                      <td className="py-3 px-6 text-blue-600 font-medium">一键引用知网数据+动态可视化</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="p-2 rounded-full bg-blue-100 text-blue-600">
                        <BookOpen className="h-5 w-5" />
                      </span>
                      校园生态闭环
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">与高校教务处合作，接入课程大纲数据→自动生成预习PPT框架。</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="p-2 rounded-full bg-green-100 text-green-600">
                        <Users className="h-5 w-5" />
                      </span>
                      UGC社区搭建
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">学生可上传作品至"案例工坊"，通过点赞数兑换AI高级功能权限。</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="p-2 rounded-full bg-purple-100 text-purple-600">
                        <FileText className="h-5 w-5" />
                      </span>
                      跨平台扩展
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">开发LaTeX插件，实现PPT内容一键转化为学术论文图表。</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">开始你的PPT创作之旅</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  从模糊主题到完整答辩PPT，平均耗时≤30分钟
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  立即体验 <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  查看演示
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="PPT Genius Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">PPT Genius</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <a href="#features" className="text-sm hover:underline underline-offset-4">
                功能
              </a>
              <a href="#workflow" className="text-sm hover:underline underline-offset-4">
                流程
              </a>
              <a href="#advantages" className="text-sm hover:underline underline-offset-4">
                优势
              </a>
              <a href="#roadmap" className="text-sm hover:underline underline-offset-4">
                路线图
              </a>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">项目负责人：XX大学创新实验室 | 联系方式：genius.ppt@university.edu</p>
            <p className="text-sm text-gray-500">版本号：v1.0（2023年9月）</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

