# jHMI
1. 顶部工具栏，调用hmi.utils类

使用规则如下：

        <div class="layui-nav layui-layout-right">
            <i class="fa fa-pencil-square-o toolbar-icon" aria-hidden="true" title="编辑"
               onClick="hmi.utils.setEditMode()"></i>
            <i class="fa fa-arrows toolbar-icon" aria-hidden="true" title="全屏查看"
               onClick="hmi.utils.showInFullScreen(hmi.stage.canvas,'RequestFullScreen')"></i>
            <i class="fa fa-align-center toolbar-icon" aria-hidden="true" title="居中显示"
               onClick="hmi.utils.showInCenter()"></i>
            <i class="fa fa-eye toolbar-icon" aria-hidden="true" title="预览"
               onClick="hmi.utils.showPic()"></i>
            <i class="fa fa-floppy-o toolbar-icon" aria-hidden="true" title="保存"
               onClick="hmi.saveTopology(true)"></i>
            <i class="fa fa-clipboard toolbar-icon" aria-hidden="true" title="复制"
               onClick="hmi.utils.cloneSelectedNodes()"></i>
            <i class="fa fa-times toolbar-icon" aria-hidden="true" title="删除"
               onClick="hmi.utils.deleteSelectedNodes()"></i>
            <i class="fa fa-trash-o toolbar-icon" aria-hidden="true" title="清空"
               onClick="hmi.utils.clearTopology()"></i>
            <i class="fa fa-search-plus toolbar-icon" aria-hidden="true" title="放大"
               onClick="hmi.utils.scalingBig()"></i>
            <i class="fa fa-search-minus toolbar-icon" aria-hidden="true" title="缩小"
               onClick="hmi.utils.scalingSmall()"></i>
        </div>
2. 定义拖拽图像
    定义节点：
    
    <td width="100%" align="center">
         <div topo-div-type="topo-node" topo-nodetype="SERVER" draggable="true"
              title="WEB服务器">
             <img class="node-icon-style"
                  src="static/jtopo/img/icon_web_server.png"/>
             <br><span>WEB服务器</span>
         </div>
     </td>

     拖拽功能实现：
        // 节点树中每个节点的拖放动作定义给拓扑图编辑器
        var nodes = $("[topo-div-type='topo-node']");
        var nodeLength = nodes.length;
        for (var i = 0; i < nodeLength; i++) {
            var text = $(nodes[i]).find("span").eq(0).text();
            var canvas =document.getElementById('topology-canvas')；
            hmi.drag(nodes[i], canvas, text);
        }
 3.加载数据
 
 var canvas =document.getElementById('topology-canvas')；
  var textfield = $("#jtopo_textfield"); 
  hmi.loadTopology('data/topology.json',canvas,textfield);   


4.保存数据

hmi.saveTopology(true) 