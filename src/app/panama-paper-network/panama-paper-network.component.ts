import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import {PanamaPapersDataService} from '../panama-papers-data.service';
import * as d3 from 'd3';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-panama-paper-network',
  templateUrl: 'panama-paper-network.component.html',
  styleUrls: ['panama-paper-network.component.css'],
  providers: [PanamaPapersDataService]
})
export class PanamaPaperNetworkComponent implements OnInit {
  errorMessage: Error;

  constructor(private papers: PanamaPapersDataService, private eltRef: ElementRef) {}

  ngOnInit() {
    this.papers.getData()
    .subscribe(
      data => {
        this.runSim(data);
      },
      err => console.error(err)
    );
  }

  runSim(graph: IPanamaPapersGraph) {
    let width = window.innerWidth, height = window.innerHeight;

    // force layout setup
    let force = d3.layout.force()
    .charge(-500)
    .linkDistance(500)
    .linkStrength(0.1)
    .size([width, height])

    // setup svg div
    let svg = d3.select(this.eltRef.nativeElement.firstChild).append('svg')
    .attr('width', width).attr('height', height)
    .attr('pointer-events', 'all');

    // Let's populate the nodes
    force.nodes(graph.nodes)
      .links(graph.links)
      .start();

    // render relationships as lines
    let link = svg.selectAll('.link')
      .data(graph.links)
        .enter()
        .append('line')
        .attr('class', (d) => 'link ' + d.type);

    // render nodes as circles, css-class from label
    let node = svg.selectAll('.node')
      .data(graph.nodes).enter()
      .append('g')
      .attr('class', (d) => 'node ' + d.label )
      .call(force.drag);

    node.append('circle')
      .attr('r', 10);

    node.append('text')
    .attr('x', 12)
    .attr('dy', '.35em')
    .text((d) => d.title );

    // force feed algo ticks for coordinate computation
    force.on('tick', () => {
      link.attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y);

      node.attr('transform', (d: any) => 'translate(' + d.x + ',' + d.y + ')');
    });
  }
}

interface IPanamaPapersGraph {
  nodes: Array<IGraphNode>;
  links: Array<IGraphLink>;
}

interface IGraphNode extends d3.layout.force.Node {
  label: string;
  title: string;
}

interface IGraphLink extends d3.layout.force.Link<IGraphNode> {
  type: string;
}
