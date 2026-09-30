import {
  FaCube,
  FaLayerGroup,
  FaFire,
  FaCog,
  FaPrint,
  FaRobot,
} from 'react-icons/fa';

// Service descriptions are based on the kinds of work shown in the portfolio.
export const services = [
  {
    id: '3d-modelling',
    icon: FaCube,
    title: '3D modelling & assemblies',
    summary:
      'Parts and assemblies modelled from your sketches, markups, photos or existing drawings, ready for detailing, quoting or manufacturing.',
  },
  {
    id: 'sheet-metal',
    icon: FaLayerGroup,
    title: 'Sheet metal',
    summary:
      'Enclosures, brackets, guards and custom hardware designed for cutting and bending, with flat patterns and DXFs for laser, plasma or waterjet.',
  },
  {
    id: 'weldments',
    icon: FaFire,
    title: 'Weldments & fabrication drawings',
    summary:
      'Frames, trailers, tables, stairs, guardrails and structural or misc. steel detailed with fabrication drawings, material lists and cut lists.',
  },
  {
    id: 'machined-parts',
    icon: FaCog,
    title: 'Machined parts',
    summary:
      'Dimensioned and toleranced part drawings and 3D models your machine shop can quote and program from.',
  },
  {
    id: '3d-printing',
    icon: FaPrint,
    title: '3D printed parts',
    summary:
      'Functional prototypes, replacement parts and short-run components designed for 3D printing (STL/STEP).',
  },
  {
    id: 'fixtures-tooling',
    icon: FaRobot,
    title: 'Fixtures, jigs & end effectors',
    summary:
      'Weld fixtures, assembly and inspection jigs, and robot end-of-arm tooling, designed by someone who has programmed industrial robots.',
  },
];

export const deliverables = [
  { format: 'STEP', detail: '3D models for any CAD system, CAM or quoting' },
  { format: 'DXF', detail: 'Flat patterns and profiles for laser, plasma and waterjet' },
  { format: 'DWG', detail: '2D drawings for AutoCAD-based workflows' },
  { format: 'PDF', detail: 'Fabrication and part drawings for the shop floor' },
  { format: 'STL', detail: 'Meshes for 3D printing' },
  { format: 'BOM', detail: 'Material, cut and parts lists' },
];

// TODO(Matt): list the CAD/CAM software you actually use (e.g. names + versions).
// Not stated anywhere in the existing site or blog, so it is left blank on purpose.
export const software = [];
