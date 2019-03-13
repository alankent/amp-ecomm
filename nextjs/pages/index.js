
/*
Copyright 2017 The AMP Start Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default () => (
  <>
  <style jsx global>{`

/*! Bassplate | MIT License | http://github.com/basscss/bassplate */

/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html {
  font-family: sans-serif;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}

article,aside,footer,header,nav,section {
  display: block
}

h1 {
  font-size: 2em;
  margin: .67em 0
}

figcaption,figure,main {
  display: block
}

figure {
  margin: 1em 40px
}

pre {
  font-family: monospace,monospace;
  font-size: 1em
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects
}

a:active,a:hover {
  outline-width: 0
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted
}

b,strong {
  font-weight: inherit;
  font-weight: bolder
}

code,kbd,samp {
  font-family: monospace,monospace;
  font-size: 1em
}

dfn {
  font-style: italic
}

mark {
  background-color: #ff0;
  color: #000
}

small {
  font-size: 80%
}

sub,sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

audio,video {
  display: inline-block
}

audio:not([controls]) {
  display: none;
  height: 0
}

img {
  border-style: none
}

svg:not(:root) {
  overflow: hidden
}

button,input,optgroup,select,textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
}

button,input {
  overflow: visible
}

button,select {
  text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
  -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
  border-style: none;
  padding: 0
}

[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
  outline: 1px dotted ButtonText
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: .35em .625em .75em
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal
}

progress {
  display: inline-block;
  vertical-align: baseline
}

textarea {
  overflow: auto
}

[type=checkbox],[type=radio] {
  box-sizing: border-box;
  padding: 0
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}

details,menu {
  display: block
}

summary {
  display: list-item
}

canvas {
  display: inline-block
}

[hidden],template {
  display: none
}

.h1 {
  font-size: 3.5rem
}

.h2 {
  font-size: 2.2rem
}

.h3 {
  font-size: 1.75rem
}

.h4 {
  font-size: 1.38rem
}

.h5 {
  font-size: 1.125rem
}

.h6 {
  font-size: 1rem
}

.font-family-inherit {
  font-family: inherit
}

.font-size-inherit {
  font-size: inherit
}

.text-decoration-none {
  text-decoration: none
}

.bold {
  font-weight: 700
}

.regular {
  font-weight: 400
}

.italic {
  font-style: italic
}

.caps {
  text-transform: uppercase;
  letter-spacing: 0
}

.left-align {
  text-align: left
}

.center {
  text-align: center
}

.right-align {
  text-align: right
}

.justify {
  text-align: justify
}

.nowrap {
  white-space: nowrap
}

.break-word {
  word-wrap: break-word
}

.line-height-1 {
  line-height: 1rem
}

.line-height-2 {
  line-height: 1.125rem
}

.line-height-3 {
  line-height: 1.5rem
}

.line-height-4 {
  line-height: 2rem
}

.list-style-none {
  list-style: none
}

.underline {
  text-decoration: underline
}

.truncate {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.list-reset {
  list-style: none;
  padding-left: 0
}

.inline {
  display: inline
}

.block {
  display: block
}

.inline-block {
  display: inline-block
}

.table {
  display: table
}

.table-cell {
  display: table-cell
}

.overflow-hidden {
  overflow: hidden
}

.overflow-scroll {
  overflow: scroll
}

.overflow-auto {
  overflow: auto
}

.clearfix:after,.clearfix:before {
  content: " ";
  display: table
}

.clearfix:after {
  clear: both
}

.left {
  float: left
}

.right {
  float: right
}

.fit {
  max-width: 100%
}

.max-width-1 {
  max-width: 24rem
}

.max-width-2 {
  max-width: 32rem
}

.max-width-3 {
  max-width: 48rem
}

.max-width-4 {
  max-width: 64rem
}

.border-box {
  box-sizing: border-box
}

.align-baseline {
  vertical-align: baseline
}

.align-top {
  vertical-align: top
}

.align-middle {
  vertical-align: middle
}

.align-bottom {
  vertical-align: bottom
}

.m0 {
  margin: 0
}

.mt0 {
  margin-top: 0
}

.mr0 {
  margin-right: 0
}

.mb0 {
  margin-bottom: 0
}

.ml0,.mx0 {
  margin-left: 0
}

.mx0 {
  margin-right: 0
}

.my0 {
  margin-top: 0;
  margin-bottom: 0
}

.m1 {
  margin: .5rem
}

.mt1 {
  margin-top: .5rem
}

.mr1 {
  margin-right: .5rem
}

.mb1 {
  margin-bottom: .5rem
}

.ml1,.mx1 {
  margin-left: .5rem
}

.mx1 {
  margin-right: .5rem
}

.my1 {
  margin-top: .5rem;
  margin-bottom: .5rem
}

.m2 {
  margin: 1rem
}

.mt2 {
  margin-top: 1rem
}

.mr2 {
  margin-right: 1rem
}

.mb2 {
  margin-bottom: 1rem
}

.ml2,.mx2 {
  margin-left: 1rem
}

.mx2 {
  margin-right: 1rem
}

.my2 {
  margin-top: 1rem;
  margin-bottom: 1rem
}

.m3 {
  margin: 1.5rem
}

.mt3 {
  margin-top: 1.5rem
}

.mr3 {
  margin-right: 1.5rem
}

.mb3 {
  margin-bottom: 1.5rem
}

.ml3,.mx3 {
  margin-left: 1.5rem
}

.mx3 {
  margin-right: 1.5rem
}

.my3 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem
}

.m4 {
  margin: 2rem
}

.mt4 {
  margin-top: 2rem
}

.mr4 {
  margin-right: 2rem
}

.mb4 {
  margin-bottom: 2rem
}

.ml4,.mx4 {
  margin-left: 2rem
}

.mx4 {
  margin-right: 2rem
}

.my4 {
  margin-top: 2rem;
  margin-bottom: 2rem
}

.mxn1 {
  margin-left: -.5rem;
  margin-right: -.5rem
}

.mxn2 {
  margin-left: -1rem;
  margin-right: -1rem
}

.mxn3 {
  margin-left: -1.5rem;
  margin-right: -1.5rem
}

.mxn4 {
  margin-left: -2rem;
  margin-right: -2rem
}

.ml-auto {
  margin-left: auto
}

.mr-auto,.mx-auto {
  margin-right: auto
}

.mx-auto {
  margin-left: auto
}

.p0 {
  padding: 0
}

.pt0 {
  padding-top: 0
}

.pr0 {
  padding-right: 0
}

.pb0 {
  padding-bottom: 0
}

.pl0,.px0 {
  padding-left: 0
}

.px0 {
  padding-right: 0
}

.py0 {
  padding-top: 0;
  padding-bottom: 0
}

.p1 {
  padding: .5rem
}

.pt1 {
  padding-top: .5rem
}

.pr1 {
  padding-right: .5rem
}

.pb1 {
  padding-bottom: .5rem
}

.pl1 {
  padding-left: .5rem
}

.py1 {
  padding-top: .5rem;
  padding-bottom: .5rem
}

.px1 {
  padding-left: .5rem;
  padding-right: .5rem
}

.p2 {
  padding: 1rem
}

.pt2 {
  padding-top: 1rem
}

.pr2 {
  padding-right: 1rem
}

.pb2 {
  padding-bottom: 1rem
}

.pl2 {
  padding-left: 1rem
}

.py2 {
  padding-top: 1rem;
  padding-bottom: 1rem
}

.px2 {
  padding-left: 1rem;
  padding-right: 1rem
}

.p3 {
  padding: 1.5rem
}

.pt3 {
  padding-top: 1.5rem
}

.pr3 {
  padding-right: 1.5rem
}

.pb3 {
  padding-bottom: 1.5rem
}

.pl3 {
  padding-left: 1.5rem
}

.py3 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem
}

.px3 {
  padding-left: 1.5rem;
  padding-right: 1.5rem
}

.p4 {
  padding: 2rem
}

.pt4 {
  padding-top: 2rem
}

.pr4 {
  padding-right: 2rem
}

.pb4 {
  padding-bottom: 2rem
}

.pl4 {
  padding-left: 2rem
}

.py4 {
  padding-top: 2rem;
  padding-bottom: 2rem
}

.px4 {
  padding-left: 2rem;
  padding-right: 2rem
}

.col {
  float: left
}

.col,.col-right {
  box-sizing: border-box
}

.col-right {
  float: right
}

.col-1 {
  width: 8.33333%
}

.col-2 {
  width: 16.66667%
}

.col-3 {
  width: 25%
}

.col-4 {
  width: 33.33333%
}

.col-5 {
  width: 41.66667%
}

.col-6 {
  width: 50%
}

.col-7 {
  width: 58.33333%
}

.col-8 {
  width: 66.66667%
}

.col-9 {
  width: 75%
}

.col-10 {
  width: 83.33333%
}

.col-11 {
  width: 91.66667%
}

.col-12 {
  width: 100%
}

@media (min-width:40.06rem) {
  .sm-col {
    float: left;
    box-sizing: border-box
  }

  .sm-col-right {
    float: right;
    box-sizing: border-box
  }

  .sm-col-1 {
    width: 8.33333%
  }

  .sm-col-2 {
    width: 16.66667%
  }

  .sm-col-3 {
    width: 25%
  }

  .sm-col-4 {
    width: 33.33333%
  }

  .sm-col-5 {
    width: 41.66667%
  }

  .sm-col-6 {
    width: 50%
  }

  .sm-col-7 {
    width: 58.33333%
  }

  .sm-col-8 {
    width: 66.66667%
  }

  .sm-col-9 {
    width: 75%
  }

  .sm-col-10 {
    width: 83.33333%
  }

  .sm-col-11 {
    width: 91.66667%
  }

  .sm-col-12 {
    width: 100%
  }
}

@media (min-width:52.06rem) {
  .md-col {
    float: left;
    box-sizing: border-box
  }

  .md-col-right {
    float: right;
    box-sizing: border-box
  }

  .md-col-1 {
    width: 8.33333%
  }

  .md-col-2 {
    width: 16.66667%
  }

  .md-col-3 {
    width: 25%
  }

  .md-col-4 {
    width: 33.33333%
  }

  .md-col-5 {
    width: 41.66667%
  }

  .md-col-6 {
    width: 50%
  }

  .md-col-7 {
    width: 58.33333%
  }

  .md-col-8 {
    width: 66.66667%
  }

  .md-col-9 {
    width: 75%
  }

  .md-col-10 {
    width: 83.33333%
  }

  .md-col-11 {
    width: 91.66667%
  }

  .md-col-12 {
    width: 100%
  }
}

@media (min-width:64.06rem) {
  .lg-col {
    float: left;
    box-sizing: border-box
  }

  .lg-col-right {
    float: right;
    box-sizing: border-box
  }

  .lg-col-1 {
    width: 8.33333%
  }

  .lg-col-2 {
    width: 16.66667%
  }

  .lg-col-3 {
    width: 25%
  }

  .lg-col-4 {
    width: 33.33333%
  }

  .lg-col-5 {
    width: 41.66667%
  }

  .lg-col-6 {
    width: 50%
  }

  .lg-col-7 {
    width: 58.33333%
  }

  .lg-col-8 {
    width: 66.66667%
  }

  .lg-col-9 {
    width: 75%
  }

  .lg-col-10 {
    width: 83.33333%
  }

  .lg-col-11 {
    width: 91.66667%
  }

  .lg-col-12 {
    width: 100%
  }
}

.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex
}

@media (min-width:40.06rem) {
  .sm-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
}

@media (min-width:52.06rem) {
  .md-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
}

@media (min-width:64.06rem) {
  .lg-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
  }
}

.flex-column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.flex-wrap {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

.items-start {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start
}

.items-end {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end
}

.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.items-baseline {
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline
}

.items-stretch {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch
}

.self-start {
  -ms-flex-item-align: start;
  align-self: flex-start
}

.self-end {
  -ms-flex-item-align: end;
  align-self: flex-end
}

.self-center {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.self-baseline {
  -ms-flex-item-align: baseline;
  align-self: baseline
}

.self-stretch {
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch
}

.justify-start {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

.justify-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.justify-around {
  -ms-flex-pack: distribute;
  justify-content: space-around
}

.content-start {
  -ms-flex-line-pack: start;
  align-content: flex-start
}

.content-end {
  -ms-flex-line-pack: end;
  align-content: flex-end
}

.content-center {
  -ms-flex-line-pack: center;
  align-content: center
}

.content-between {
  -ms-flex-line-pack: justify;
  align-content: space-between
}

.content-around {
  -ms-flex-line-pack: distribute;
  align-content: space-around
}

.content-stretch {
  -ms-flex-line-pack: stretch;
  align-content: stretch
}

.flex-auto {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0
}

.flex-none {
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none
}

.order-0 {
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0
}

.order-1 {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1
}

.order-2 {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2
}

.order-3 {
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3
}

.order-last {
  -webkit-box-ordinal-group: 100000;
  -ms-flex-order: 99999;
  order: 99999
}

.relative {
  position: relative
}

.absolute {
  position: absolute
}

.fixed {
  position: fixed
}

.top-0 {
  top: 0
}

.right-0 {
  right: 0
}

.bottom-0 {
  bottom: 0
}

.left-0 {
  left: 0
}

.z1 {
  z-index: 1
}

.z2 {
  z-index: 2
}

.z3 {
  z-index: 3
}

.z4 {
  z-index: 4
}

.border {
  border-style: solid;
  border-width: 1px
}

.border-top {
  border-top-style: solid;
  border-top-width: 1px
}

.border-right {
  border-right-style: solid;
  border-right-width: 1px
}

.border-bottom {
  border-bottom-style: solid;
  border-bottom-width: 1px
}

.border-left {
  border-left-style: solid;
  border-left-width: 1px
}

.border-none {
  border: 0
}

.rounded {
  border-radius: 3px
}

.circle {
  border-radius: 50%
}

.rounded-top {
  border-radius: 3px 3px 0 0
}

.rounded-right {
  border-radius: 0 3px 3px 0
}

.rounded-bottom {
  border-radius: 0 0 3px 3px
}

.rounded-left {
  border-radius: 3px 0 0 3px
}

.not-rounded {
  border-radius: 0
}

.hide {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px,1px,1px,1px)
}

.display-none {
  display: none
}

* {
  box-sizing: border-box
}

body {
  background: #fff;
  color: #222;
  font-family: Cardo,serif;
  min-width: 315px;
  overflow-x: hidden;
  font-smooth: always;
  -webkit-font-smoothing: antialiased
}

main {
  max-width: 1280px;
  margin: 0 auto
}

p {
  padding: 0;
  margin: 0
}

.ampstart-accent {
  color: #f88
}

#content:target {
  margin-top: calc(0px - 3.5rem);
  padding-top: 3.5rem
}

.ampstart-title-lg {
  font-size: 3.5rem;
  line-height: 3.5rem;
  letter-spacing: .06rem
}

.ampstart-title-md {
  font-size: 2.2rem;
  line-height: 2.5rem;
  letter-spacing: .06rem
}

.ampstart-title-sm {
  font-size: 1.75rem;
  line-height: 2rem;
  letter-spacing: .06rem
}

.ampstart-subtitle,body {
  line-height: 1.5rem;
  letter-spacing: normal
}

.ampstart-subtitle {
  color: #f88;
  font-size: 1rem
}

.ampstart-byline,.ampstart-caption,.ampstart-hint,.ampstart-label {
  font-size: 1.125rem;
  color: #4f4f4f;
  line-height: 1.125rem;
  letter-spacing: .06rem
}

.ampstart-label {
  text-transform: uppercase
}

.ampstart-footer,.ampstart-small-text {
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: .06rem
}

.ampstart-card {
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 1px 1px -1px rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)
}

.h1,h1 {
  font-size: 3.5rem;
  line-height: 3.5rem
}

.h2,h2 {
  font-size: 2.2rem;
  line-height: 2.5rem
}

.h3,h3 {
  font-size: 1.75rem;
  line-height: 2rem
}

.h4,h4 {
  font-size: 1.38rem;
  line-height: 1.5rem
}

.h5,h5 {
  font-size: 1.125rem;
  line-height: 1.125rem
}

.h6,h6 {
  font-size: 1rem;
  line-height: 1rem
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
  font-weight: 400;
  letter-spacing: .06rem
}

a,a:active,a:visited {
  color: inherit
}

.ampstart-dropcap:first-letter {
  color: #f88;
  font-size: 3.5rem;
  font-weight: 700;
  float: left;
  overflow: hidden;
  line-height: 3.5rem;
  margin-left: 0;
  margin-right: .5rem
}

.ampstart-initialcap {
  padding-top: 1rem;
  margin-top: 1.5rem
}

.ampstart-initialcap:first-letter {
  color: #f88;
  font-size: 3.5rem;
  font-weight: 700;
  margin-left: -2px
}

.ampstart-pullquote {
  border: none;
  border-left: 4px solid #222;
  font-size: 1.75rem;
  padding-left: 1.5rem
}

@media (min-width:40.06rem) {
  .sm-h00 {
    font-size: 4rem
  }

  .sm-h0 {
    font-size: 3rem
  }

  .sm-h1 {
    font-size: 3.5rem
  }

  .sm-h2 {
    font-size: 2.2rem
  }

  .sm-h3 {
    font-size: 1.75rem
  }

  .sm-h4 {
    font-size: 1.38rem
  }

  .sm-h5 {
    font-size: 1.125rem
  }

  .sm-h6 {
    font-size: 1rem
  }
}

@media (min-width:52.06rem) {
  .md-h00 {
    font-size: 4rem
  }

  .md-h0 {
    font-size: 3rem
  }

  .md-h1 {
    font-size: 3.5rem
  }

  .md-h2 {
    font-size: 2.2rem
  }

  .md-h3 {
    font-size: 1.75rem
  }

  .md-h4 {
    font-size: 1.38rem
  }

  .md-h5 {
    font-size: 1.125rem
  }

  .md-h6 {
    font-size: 1rem
  }
}

@media (min-width:64.06rem) {
  .lg-h00 {
    font-size: 4rem
  }

  .lg-h0 {
    font-size: 3rem
  }

  .lg-h1 {
    font-size: 3.5rem
  }

  .lg-h2 {
    font-size: 2.2rem
  }

  .lg-h3 {
    font-size: 1.75rem
  }

  .lg-h4 {
    font-size: 1.38rem
  }

  .lg-h5 {
    font-size: 1.125rem
  }

  .lg-h6 {
    font-size: 1rem
  }
}

@media (min-width:40.06rem) {
  .sm-m0 {
    margin: 0
  }

  .sm-mt0 {
    margin-top: 0
  }

  .sm-mr0 {
    margin-right: 0
  }

  .sm-mb0 {
    margin-bottom: 0
  }

  .sm-ml0,.sm-mx0 {
    margin-left: 0
  }

  .sm-mx0 {
    margin-right: 0
  }

  .sm-my0 {
    margin-top: 0;
    margin-bottom: 0
  }

  .sm-m1 {
    margin: .5rem
  }

  .sm-mt1 {
    margin-top: .5rem
  }

  .sm-mr1 {
    margin-right: .5rem
  }

  .sm-mb1 {
    margin-bottom: .5rem
  }

  .sm-ml1,.sm-mx1 {
    margin-left: .5rem
  }

  .sm-mx1 {
    margin-right: .5rem
  }

  .sm-my1 {
    margin-top: .5rem;
    margin-bottom: .5rem
  }

  .sm-m2 {
    margin: 1rem
  }

  .sm-mt2 {
    margin-top: 1rem
  }

  .sm-mr2 {
    margin-right: 1rem
  }

  .sm-mb2 {
    margin-bottom: 1rem
  }

  .sm-ml2,.sm-mx2 {
    margin-left: 1rem
  }

  .sm-mx2 {
    margin-right: 1rem
  }

  .sm-my2 {
    margin-top: 1rem;
    margin-bottom: 1rem
  }

  .sm-m3 {
    margin: 1.5rem
  }

  .sm-mt3 {
    margin-top: 1.5rem
  }

  .sm-mr3 {
    margin-right: 1.5rem
  }

  .sm-mb3 {
    margin-bottom: 1.5rem
  }

  .sm-ml3,.sm-mx3 {
    margin-left: 1.5rem
  }

  .sm-mx3 {
    margin-right: 1.5rem
  }

  .sm-my3 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem
  }

  .sm-m4 {
    margin: 2rem
  }

  .sm-mt4 {
    margin-top: 2rem
  }

  .sm-mr4 {
    margin-right: 2rem
  }

  .sm-mb4 {
    margin-bottom: 2rem
  }

  .sm-ml4,.sm-mx4 {
    margin-left: 2rem
  }

  .sm-mx4 {
    margin-right: 2rem
  }

  .sm-my4 {
    margin-top: 2rem;
    margin-bottom: 2rem
  }

  .sm-mxn1 {
    margin-left: -.5rem;
    margin-right: -.5rem
  }

  .sm-mxn2 {
    margin-left: -1rem;
    margin-right: -1rem
  }

  .sm-mxn3 {
    margin-left: -1.5rem;
    margin-right: -1.5rem
  }

  .sm-mxn4 {
    margin-left: -2rem;
    margin-right: -2rem
  }

  .sm-ml-auto {
    margin-left: auto
  }

  .sm-mr-auto,.sm-mx-auto {
    margin-right: auto
  }

  .sm-mx-auto {
    margin-left: auto
  }
}

@media (min-width:52.06rem) {
  .md-m0 {
    margin: 0
  }

  .md-mt0 {
    margin-top: 0
  }

  .md-mr0 {
    margin-right: 0
  }

  .md-mb0 {
    margin-bottom: 0
  }

  .md-ml0,.md-mx0 {
    margin-left: 0
  }

  .md-mx0 {
    margin-right: 0
  }

  .md-my0 {
    margin-top: 0;
    margin-bottom: 0
  }

  .md-m1 {
    margin: .5rem
  }

  .md-mt1 {
    margin-top: .5rem
  }

  .md-mr1 {
    margin-right: .5rem
  }

  .md-mb1 {
    margin-bottom: .5rem
  }

  .md-ml1,.md-mx1 {
    margin-left: .5rem
  }

  .md-mx1 {
    margin-right: .5rem
  }

  .md-my1 {
    margin-top: .5rem;
    margin-bottom: .5rem
  }

  .md-m2 {
    margin: 1rem
  }

  .md-mt2 {
    margin-top: 1rem
  }

  .md-mr2 {
    margin-right: 1rem
  }

  .md-mb2 {
    margin-bottom: 1rem
  }

  .md-ml2,.md-mx2 {
    margin-left: 1rem
  }

  .md-mx2 {
    margin-right: 1rem
  }

  .md-my2 {
    margin-top: 1rem;
    margin-bottom: 1rem
  }

  .md-m3 {
    margin: 1.5rem
  }

  .md-mt3 {
    margin-top: 1.5rem
  }

  .md-mr3 {
    margin-right: 1.5rem
  }

  .md-mb3 {
    margin-bottom: 1.5rem
  }

  .md-ml3,.md-mx3 {
    margin-left: 1.5rem
  }

  .md-mx3 {
    margin-right: 1.5rem
  }

  .md-my3 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem
  }

  .md-m4 {
    margin: 2rem
  }

  .md-mt4 {
    margin-top: 2rem
  }

  .md-mr4 {
    margin-right: 2rem
  }

  .md-mb4 {
    margin-bottom: 2rem
  }

  .md-ml4,.md-mx4 {
    margin-left: 2rem
  }

  .md-mx4 {
    margin-right: 2rem
  }

  .md-my4 {
    margin-top: 2rem;
    margin-bottom: 2rem
  }

  .md-mxn1 {
    margin-left: -.5rem;
    margin-right: -.5rem
  }

  .md-mxn2 {
    margin-left: -1rem;
    margin-right: -1rem
  }

  .md-mxn3 {
    margin-left: -1.5rem;
    margin-right: -1.5rem
  }

  .md-mxn4 {
    margin-left: -2rem;
    margin-right: -2rem
  }

  .md-ml-auto {
    margin-left: auto
  }

  .md-mr-auto,.md-mx-auto {
    margin-right: auto
  }

  .md-mx-auto {
    margin-left: auto
  }
}

@media (min-width:64.06rem) {
  .lg-m0 {
    margin: 0
  }

  .lg-mt0 {
    margin-top: 0
  }

  .lg-mr0 {
    margin-right: 0
  }

  .lg-mb0 {
    margin-bottom: 0
  }

  .lg-ml0,.lg-mx0 {
    margin-left: 0
  }

  .lg-mx0 {
    margin-right: 0
  }

  .lg-my0 {
    margin-top: 0;
    margin-bottom: 0
  }

  .lg-m1 {
    margin: .5rem
  }

  .lg-mt1 {
    margin-top: .5rem
  }

  .lg-mr1 {
    margin-right: .5rem
  }

  .lg-mb1 {
    margin-bottom: .5rem
  }

  .lg-ml1,.lg-mx1 {
    margin-left: .5rem
  }

  .lg-mx1 {
    margin-right: .5rem
  }

  .lg-my1 {
    margin-top: .5rem;
    margin-bottom: .5rem
  }

  .lg-m2 {
    margin: 1rem
  }

  .lg-mt2 {
    margin-top: 1rem
  }

  .lg-mr2 {
    margin-right: 1rem
  }

  .lg-mb2 {
    margin-bottom: 1rem
  }

  .lg-ml2,.lg-mx2 {
    margin-left: 1rem
  }

  .lg-mx2 {
    margin-right: 1rem
  }

  .lg-my2 {
    margin-top: 1rem;
    margin-bottom: 1rem
  }

  .lg-m3 {
    margin: 1.5rem
  }

  .lg-mt3 {
    margin-top: 1.5rem
  }

  .lg-mr3 {
    margin-right: 1.5rem
  }

  .lg-mb3 {
    margin-bottom: 1.5rem
  }

  .lg-ml3,.lg-mx3 {
    margin-left: 1.5rem
  }

  .lg-mx3 {
    margin-right: 1.5rem
  }

  .lg-my3 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem
  }

  .lg-m4 {
    margin: 2rem
  }

  .lg-mt4 {
    margin-top: 2rem
  }

  .lg-mr4 {
    margin-right: 2rem
  }

  .lg-mb4 {
    margin-bottom: 2rem
  }

  .lg-ml4,.lg-mx4 {
    margin-left: 2rem
  }

  .lg-mx4 {
    margin-right: 2rem
  }

  .lg-my4 {
    margin-top: 2rem;
    margin-bottom: 2rem
  }

  .lg-mxn1 {
    margin-left: -.5rem;
    margin-right: -.5rem
  }

  .lg-mxn2 {
    margin-left: -1rem;
    margin-right: -1rem
  }

  .lg-mxn3 {
    margin-left: -1.5rem;
    margin-right: -1.5rem
  }

  .lg-mxn4 {
    margin-left: -2rem;
    margin-right: -2rem
  }

  .lg-ml-auto {
    margin-left: auto
  }

  .lg-mr-auto,.lg-mx-auto {
    margin-right: auto
  }

  .lg-mx-auto {
    margin-left: auto
  }
}

@media (min-width:40.06rem) {
  .sm-p0 {
    padding: 0
  }

  .sm-pt0 {
    padding-top: 0
  }

  .sm-pr0 {
    padding-right: 0
  }

  .sm-pb0 {
    padding-bottom: 0
  }

  .sm-pl0,.sm-px0 {
    padding-left: 0
  }

  .sm-px0 {
    padding-right: 0
  }

  .sm-py0 {
    padding-top: 0;
    padding-bottom: 0
  }

  .sm-p1 {
    padding: .5rem
  }

  .sm-pt1 {
    padding-top: .5rem
  }

  .sm-pr1 {
    padding-right: .5rem
  }

  .sm-pb1 {
    padding-bottom: .5rem
  }

  .sm-pl1,.sm-px1 {
    padding-left: .5rem
  }

  .sm-px1 {
    padding-right: .5rem
  }

  .sm-py1 {
    padding-top: .5rem;
    padding-bottom: .5rem
  }

  .sm-p2 {
    padding: 1rem
  }

  .sm-pt2 {
    padding-top: 1rem
  }

  .sm-pr2 {
    padding-right: 1rem
  }

  .sm-pb2 {
    padding-bottom: 1rem
  }

  .sm-pl2,.sm-px2 {
    padding-left: 1rem
  }

  .sm-px2 {
    padding-right: 1rem
  }

  .sm-py2 {
    padding-top: 1rem;
    padding-bottom: 1rem
  }

  .sm-p3 {
    padding: 1.5rem
  }

  .sm-pt3 {
    padding-top: 1.5rem
  }

  .sm-pr3 {
    padding-right: 1.5rem
  }

  .sm-pb3 {
    padding-bottom: 1.5rem
  }

  .sm-pl3,.sm-px3 {
    padding-left: 1.5rem
  }

  .sm-px3 {
    padding-right: 1.5rem
  }

  .sm-py3 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
  }

  .sm-p4 {
    padding: 2rem
  }

  .sm-pt4 {
    padding-top: 2rem
  }

  .sm-pr4 {
    padding-right: 2rem
  }

  .sm-pb4 {
    padding-bottom: 2rem
  }

  .sm-pl4,.sm-px4 {
    padding-left: 2rem
  }

  .sm-px4 {
    padding-right: 2rem
  }

  .sm-py4 {
    padding-top: 2rem;
    padding-bottom: 2rem
  }
}

@media (min-width:52.06rem) {
  .md-p0 {
    padding: 0
  }

  .md-pt0 {
    padding-top: 0
  }

  .md-pr0 {
    padding-right: 0
  }

  .md-pb0 {
    padding-bottom: 0
  }

  .md-pl0,.md-px0 {
    padding-left: 0
  }

  .md-px0 {
    padding-right: 0
  }

  .md-py0 {
    padding-top: 0;
    padding-bottom: 0
  }

  .md-p1 {
    padding: .5rem
  }

  .md-pt1 {
    padding-top: .5rem
  }

  .md-pr1 {
    padding-right: .5rem
  }

  .md-pb1 {
    padding-bottom: .5rem
  }

  .md-pl1,.md-px1 {
    padding-left: .5rem
  }

  .md-px1 {
    padding-right: .5rem
  }

  .md-py1 {
    padding-top: .5rem;
    padding-bottom: .5rem
  }

  .md-p2 {
    padding: 1rem
  }

  .md-pt2 {
    padding-top: 1rem
  }

  .md-pr2 {
    padding-right: 1rem
  }

  .md-pb2 {
    padding-bottom: 1rem
  }

  .md-pl2,.md-px2 {
    padding-left: 1rem
  }

  .md-px2 {
    padding-right: 1rem
  }

  .md-py2 {
    padding-top: 1rem;
    padding-bottom: 1rem
  }

  .md-p3 {
    padding: 1.5rem
  }

  .md-pt3 {
    padding-top: 1.5rem
  }

  .md-pr3 {
    padding-right: 1.5rem
  }

  .md-pb3 {
    padding-bottom: 1.5rem
  }

  .md-pl3,.md-px3 {
    padding-left: 1.5rem
  }

  .md-px3 {
    padding-right: 1.5rem
  }

  .md-py3 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
  }

  .md-p4 {
    padding: 2rem
  }

  .md-pt4 {
    padding-top: 2rem
  }

  .md-pr4 {
    padding-right: 2rem
  }

  .md-pb4 {
    padding-bottom: 2rem
  }

  .md-pl4,.md-px4 {
    padding-left: 2rem
  }

  .md-px4 {
    padding-right: 2rem
  }

  .md-py4 {
    padding-top: 2rem;
    padding-bottom: 2rem
  }
}

@media (min-width:64.06rem) {
  .lg-p0 {
    padding: 0
  }

  .lg-pt0 {
    padding-top: 0
  }

  .lg-pr0 {
    padding-right: 0
  }

  .lg-pb0 {
    padding-bottom: 0
  }

  .lg-pl0,.lg-px0 {
    padding-left: 0
  }

  .lg-px0 {
    padding-right: 0
  }

  .lg-py0 {
    padding-top: 0;
    padding-bottom: 0
  }

  .lg-p1 {
    padding: .5rem
  }

  .lg-pt1 {
    padding-top: .5rem
  }

  .lg-pr1 {
    padding-right: .5rem
  }

  .lg-pb1 {
    padding-bottom: .5rem
  }

  .lg-pl1,.lg-px1 {
    padding-left: .5rem
  }

  .lg-px1 {
    padding-right: .5rem
  }

  .lg-py1 {
    padding-top: .5rem;
    padding-bottom: .5rem
  }

  .lg-p2 {
    padding: 1rem
  }

  .lg-pt2 {
    padding-top: 1rem
  }

  .lg-pr2 {
    padding-right: 1rem
  }

  .lg-pb2 {
    padding-bottom: 1rem
  }

  .lg-pl2,.lg-px2 {
    padding-left: 1rem
  }

  .lg-px2 {
    padding-right: 1rem
  }

  .lg-py2 {
    padding-top: 1rem;
    padding-bottom: 1rem
  }

  .lg-p3 {
    padding: 1.5rem
  }

  .lg-pt3 {
    padding-top: 1.5rem
  }

  .lg-pr3 {
    padding-right: 1.5rem
  }

  .lg-pb3 {
    padding-bottom: 1.5rem
  }

  .lg-pl3,.lg-px3 {
    padding-left: 1.5rem
  }

  .lg-px3 {
    padding-right: 1.5rem
  }

  .lg-py3 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
  }

  .lg-p4 {
    padding: 2rem
  }

  .lg-pt4 {
    padding-top: 2rem
  }

  .lg-pr4 {
    padding-right: 2rem
  }

  .lg-pb4 {
    padding-bottom: 2rem
  }

  .lg-pl4,.lg-px4 {
    padding-left: 2rem
  }

  .lg-px4 {
    padding-right: 2rem
  }

  .lg-py4 {
    padding-top: 2rem;
    padding-bottom: 2rem
  }
}

/*
.ampstart-icon {
  fill: #f88
}
*/
body {
  font-size: .94rem;
  line-height: normal
}

.h3 {
  color: #222
}

.h7 {
  font-size: .94rem
}

.pr7 {
  padding-right: 5rem
}

.mb5 {
  margin-bottom: 2.5rem
}

.pb5 {
  padding-bottom: 2.5rem
}

@media (min-width:52.06rem) {
  .md-h7 {
    font-size: .94rem
  }

  .md-mb7 {
    margin-bottom: 5rem
  }

  .md-px4 {
    padding-left: 2rem;
    padding-right: 2rem
  }

  .md-pt5 {
    padding-top: 2.5rem
  }

  .md-pb5 {
    padding-bottom: 2.5rem
  }

  .md-pl5 {
    padding-left: 2.5rem
  }

  .md-pt6 {
    padding-top: 3rem
  }

  .md-pl7 {
    padding-left: 5rem
  }

  .md-pr7,.md-px7 {
    padding-right: 5rem
  }

  .md-px7 {
    padding-left: 5rem
  }

  .md-pt7 {
    padding-top: 5rem
  }

  .md-pb7 {
    padding-bottom: 5rem
  }
}

@-webkit-keyframes a {
  0%,80%,to {
    box-shadow: 0 1rem 0 -1rem
  }

  40% {
    box-shadow: 0 1rem 0 0
  }
}

@keyframes a {
  0%,80%,to {
    box-shadow: 0 1rem 0 -1rem
  }

  40% {
    box-shadow: 0 1rem 0 0
  }
}

.amp-mode-mouse .commerce-select:hover {
  color: #222;
  cursor: pointer
}

amp-selector [option] {
  outline: 1px solid #f3f3f3
}

amp-selector [option]:hover {
  outline: 1px solid #222
}

amp-selector [option][selected] {
  outline-color: #222
}

.amp-carousel-button-next,.amp-carousel-button-prev {
  display: none
}

.ampstart-pullquote {
  font-size: 2.2rem;
  margin: 1.5rem 0 1rem;
  line-height: 1.2;
  border-left: none;
  padding-left: 0
}

.commerce-pullquote-author {
  font-size: 1rem;
  margin-bottom: 1.5rem
}

.commerce-pullquote-author,.commerce-table {
  font-family: Open Sans Condensed,sans-serif;
  font-weight: 700
}

.commerce-table {
  border-collapse: collapse;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  text-transform: uppercase;
  color: #222
}

.commerce-table-header {
  background: #000;
  color: #fff
}

.commerce-table td,.commerce-table th {
  padding: 0;
  border: 1px solid #000;
  line-height: 3rem
}

.commerce-table td {
  border: 1px solid #e9e9e9;
  width: 25%;
  background-color: #fff
}

.commerce-table td:first-child {
  width: 50%
}

.ampstart-headerbar-title {
  font-size: 1.38rem;
  font-weight: 700;
  line-height: normal;
  color: #222
}

@media (min-width:52.06rem) {
  .ampstart-headerbar-title {
    font-size: 1.75rem
  }
}

.ampstart-headerbar-home-link {
  padding-bottom: 0
}

.ampstart-headerbar-icon-wrapper {
  width: 25px
}

@media (min-width:52.06rem) {
  .ampstart-headerbar-fixed {
    top: .5rem
  }
}

.ampstart-headerbar-fixed-link {
  margin-right: 0
}

.icon-star,.icon-star-empty {
  height: 14px;
  width: 14px;
  color: #f9ab00
}

.icon-star-empty {
  color: #dadada
}

.commerce-product-btn-wrapper {
  text-align: center
}

@media (min-width:52.06rem) {
  .commerce-product-btn-wrapper {
    text-align: initial
  }
}

.commerce-product-color-swatch {
  height: 24px;
  width: 24px;
  margin-left: .5rem
}

.commerce-product-color-swatch:first-child {
  margin-left: 0
}

.commerce-product-color-blue {
  background-color: #1d4cdf
}

.commerce-product-color-black {
  background-color: #000
}

.commerce-product-thumb {
  width: 43px;
  margin-left: .5rem
}

.commerce-product-thumb:first-child {
  margin-left: 0
}

@media (min-width:52.06rem) {
  .commerce-product-thumb {
    width: 80px
  }

  .commerce-product-desc {
    margin-right: 8.33333%
  }
}

@-webkit-keyframes b {
  0%,to {
    opacity: 0
  }

  10%,90% {
    opacity: 1
  }
}

@keyframes b {
  0%,to {
    opacity: 0
  }

  10%,90% {
    opacity: 1
  }
}

.commerce-blog-wrapper {
  background-color: #fff
}

.commerce-blog-wrapper p {
  line-height: 1.6
}

.commerce-blog-sidebar .ampstart-social-follow li:first-child a {
  margin-left: -.5rem
}

.commerce-cart-added .ampstart-headerbar-icon-wrapper:after {
  content: "1";
  display: block;
  width: 17px;
  height: 17px;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background-color: #f88;
  color: #fff;
  font: 700 .7rem Open Sans Condensed,sans-serif;
  opacity: 0;
  -webkit-animation: c .5s forwards;
  animation: c .5s forwards
}

@-webkit-keyframes c {
  to {
    opacity: 1
  }
}

@keyframes c {
  to {
    opacity: 1
  }
}


# antoine-new

.title {
    line-height: normal;
    letter-spacing: normal;
    font-family: Open Sans Condensed,sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    color: #000;
}
.commerce-cart-notification {
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0 6px 12px -3px #222;
  display: block;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  right: 0;
  position: fixed;
  width: 100%;
  margin: 0;
}
.commerce-cart-added .commerce-cart-notification {
  -webkit-animation: b 2.5s 0s;
  animation: b 2.5s 0s;
  pointer-events: auto;
}
.commerce-cart-item {
	margin: 0;
	padding: 1rem;
}
.commerce-cart-item div {
	width: 25%;
}
.commerce-cart-item .title {
	font-size: 1rem;
	margin-bottom: .5rem;
}
.commerce-cart-item .commerce-cart-item-desc {
	width: 50%;
    padding-left: .5rem;
    padding-right: .5rem;
}
.commerce-cart-item .commerce-cart-item-desc div {
	width: auto;
}
.commerce-cart-item .commerce-cart-item-desc .title {
	margin-bottom: .5rem;
}
.actions-container {
	padding: 1rem;
	margin-left: calc(.5rem * -1);
    margin-right: calc(.5rem * -1);
}
.actions-container a {
	width: 50%;
	float: left;
	margin:0 .5rem;
	border-color: #222;
}
.details-content {
	padding-bottom: 2rem;
}
.carousel-content {
	width: 100%;
    padding: 1rem 1rem 0 1rem;
}

.carousel-content amp-selector ul {
	display: inline-block;
	margin: 1em 0;
}
.carousel-content amp-selector li:first-child {
	margin-left: 0;
}
.carousel-content amp-selector li {
	display: inline-block;
	margin-left: .5rem;
	width: 43px;
}
.parameters-content {
	padding-right: 1rem;
	padding-left: 1rem;
	align-content: flex-start;
}
.parameters-content hr {
	margin-bottom: 2rem;
}
.parameters-content hr.section-devider {
    margin: 0 -1.5rem;
}
.product-description {
	width: 50%;
	padding-bottom: 1rem;
}
.product-description h1 {
	font-size: 1.75rem;
}
.product-description .title {
	font-size: 1.38rem;
}
.product-rating {
	width: 50%;
	text-align: right;
}
.product-rating h2 {
    font-size: .94rem;
    padding-bottom: .5rem;
}
.product-headline {
	width: 100%;
	padding-bottom: 2rem;
}
.product-colors {
	width: 50%;
	padding-bottom: 2rem;
}
.product-colors span {
	font-size: 1rem;
    padding-right: 1rem;
    vertical-align: top;
}
.product-colors li {
	display: inline-block;
    margin-right: .5rem;
}
.product-colors .title,
.product-sizes .title {
	font-size: 1rem;
}
.product-sizes .title.commerce-select {
	color: #666;
}
.commerce-product-btn-wrapper {
	text-align: center;
	width: 100%;
	margin-bottom: 2rem;
}
.info-content {
	width: 100%;
	padding-bottom: 1.5rem;
}
.info-content hr.section-divider {
	display: none;
}
.product-copy {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;    
}
.product-copy > section {
	padding: 1.5rem 2rem 0;
}
.product-copy h2 {
	font-size: 1.125rem;
}
.product-copy p {
	margin-bottom: 1.5rem;
	margin-top: 1rem;
}
.product-reviews {
	padding-top: 1.5rem;
}
.product-reviews h2 {
	font-size: 1.125rem;
	margin-bottom: 1rem;
}
.product-reviews h3 {
    font-size: .94rem;
    margin-bottom: .5rem;
}
.product-reviews section {
	margin-top: 0;
	margin-bottom: 1.5rem;
}
.product-reviews p {
	margin-top: .5rem;
	margin-bottom: 0;
}
.product-size-guide {
	width: 100%;
}
.product-size-guide section {
	padding: 1.5rem 1rem;

}
.product-size-guide h2 {
	font-size: 1.125rem;
}
.product-size-guide section > div {
    margin-top: 1rem;
}
.product-size-guide thead.title {
	color: #fff;
}
.product-size-guide dt {
    width: 33.33333%;
    padding-bottom: .5rem;
}
.product-size-guide dd {
	width: 66.66667%;
	padding-bottom: .5rem;
	margin: 0;
}
.info-content .related-products {
	width: 100%;
	padding: 0 2rem;
}

@media (min-width: 52.06rem) {
	.commerce-cart-notification {
		top: calc(5rem - 1rem);
		width: auto;
		margin:0 1rem;
	}

	.commerce-cart-notification:before {
		background: #fff;
		border-top: 1px solid #f3f3f3;
		border-left: 1px solid #f3f3f3;
		content: "";
		height: .5rem;
		width: .5rem;
		position: absolute;
		top: -1px;
		right: .5rem;
		-webkit-transform: translate(-50%,-50%) rotate(45deg);
		transform: translate(-50%,-50%) rotate(45deg)
	}
	.commerce-cart-item {
	    border-bottom: 1px solid #f3f3f3;
	}
	.actions-container a {
		text-align: center;
	}
	.details-content {
		padding-bottom: 5rem;
	}
	.carousel-content {
		width: 50%;
		padding: 2rem 0 0 5rem;
	}
	.carousel-content amp-selector li {
		width: 80px;
	}
	.parameters-content {
		width: 50%;
		padding-top: 2rem;
		padding-right: 5rem;
		padding-left: 2.5rem;
	}
	.parameters-content hr {
		width: 100%;
	}
	.parameters-content hr.section-devider {
	    display: none;
	}
	.product-description h1 {
		font-size: 2.2rem;
	}
	.product-description .title {
	    font-size: 1.75rem;
	}
	.product-colors .title,
	.product-sizes .title {
		font-size: 0.94rem;
	}
	.commerce-product-btn-wrapper {
		text-align: initial;
	}
	.info-content hr.section-divider {
		display: block;
		margin-top: 2rem;
	}
	.product-copy {
	    margin-right: 8.33333%;
        padding-left: 5rem;
        padding-right: 1rem;
        width: 50%;
	}
	.product-copy > section {
		padding-top: 3rem;
	}
	.product-copy h2 {
		font-size: 1.38rem;
	}
	.product-reviews {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
	.product-reviews h2 {
		font-size: 1.38rem;
	}
	.product-size-guide {
	    padding-right: 5rem;
	    padding-left: 2.5rem;
	    width: 41.66667%;
	}
	.product-size-guide section:first-child {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
	.product-size-guide section:first-child {
		padding-top: 3rem;
	}
	.product-size-guide h2 {
		font-size: 1.38rem;
	}
}

@media (max-width: 40rem) {
	.info-content .related-products {
	    display: block;
	}
	.commerce-cart-item-desc {
	    margin-top: 2rem;
	}
}

@media (max-width: 52rem) and (min-width: 40.06rem) {
	.info-content .related-products {
	    display: block;
	}
}


/* contact-us page */
.contact section {
	padding: 1rem 1rem 2.5rem;
}
.contact h1 {
	font-size: 1.75rem;
	margin-bottom: 1rem;
}
.contact p {
	margin-bottom: 1rem;
}
.contact .ampstart-input {
	display: inline-block;
	position: relative;
	padding: 0;
	margin: 0 0 1.5rem;
}
.contact .ampstart-input.last-input {
	margin-top: 1.5rem;
	margin-bottom: 2.5rem;
}
.contact input {
	margin-top: 1.5rem;
	border-bottom-width: 100%;
	border-bottom: 1px dashed #f3f3f3;
    width: 100%;
    line-height: 1.5rem;
    border: 0;
    border-radius: 0;
    background: none;
    outline: 0;
    color: #000;
}
.contact label {
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	top: 0;
	color: #222;
    pointer-events: none;
    text-align: left;
    font-size: 1.125rem;
    line-height: 1rem;
    opacity: 0;
    animation: .2s;
    animation-timing-function: cubic-bezier(.4,0,.2,1);
    animation-fill-mode: forwards;
}
.contact textarea {
    border-bottom: 1px dashed #f3f3f3;
    color: #222;
    width: 100%;
    margin-top: 1rem;
    line-height: 1.5rem;
    border: 0;
    border-radius: 0;
    background: none;
    outline: 0;
    padding: 0;
}
.contact label.title {
	opacity: 1;
	font-size: .94rem;
}

@media (min-width: 52.06rem) {
	.contact section {
		width: 50%;
		padding: 2rem 2rem 5rem;
	}
}

/* checkout page */

.checkout section {
    padding: 1rem 1rem 2.5rem;
}
.checkout h3,
.checkout p {
    margin-bottom: 1rem;
}
.checkout .code {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
}

# ben-new.cs
a {
  text-decoration: none;
  background-color: none;
}

ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

/* so we have this... plus also rules for .input-container>select. Redundant? */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 0;
  background: none;
  color: #666;
}

.h1,.h2,.h3,.h4,.h5,.h6,.h7,h1,h2,h3,h4,h5,h6,h7,.sans-big {
  line-height: normal;
  letter-spacing: normal;
  font-family: Open Sans Condensed,sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: #000;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.38rem;
}

h5 {
  font-size: 1.125rem;
}

h6 {
  font-size: 1rem;
}

hr {
  box-sizing: content-box;
  overflow: visible;
  width: calc(100% + 2 * 1.5rem);
  height: 1px;
  background-color: #f3f3f3;
  border: none;
  margin: 0 -1.5rem;
}

dd:after {
  content: "";
  display: block
}

main {
  max-width: 1280px;
  margin: 3.5rem auto 0;
  padding-bottom: 1.5rem;
}


/* Buttons */

.button {
  display: inline-block;
  background-color: #222;
  color: #fff;
  border: 1px solid #fff;
  font-size: .8rem;
  font-family: Open Sans Condensed,sans-serif;
  font-weight: 700;
  padding: .5rem 2rem;
  line-height: 1.125rem;
  text-transform: uppercase;
  -webkit-transition: background-color .2s ease-in,color .2s ease-in;
  transition: background-color .2s ease-in,color .2s ease-in;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
}

.amp-mode-mouse .button:hover,.button-white {
  background-color: #fff;
  color: #222;
}

.amp-mode-mouse .button-white:hover {
  background-color: #222;
  color: #fff;
}

.button:visited {
  color: #fff;
}

.button:active .button:focus {
  opacity: .8
}

.button[disabled],.button[disabled]:active,.button[disabled]:focus,.button[disabled]:hover {
  opacity: .5;
  outline: 0;
  cursor: default
}

.button-white {
  border-color: #222;
}

.button-white:visited {
  color: #222;
}

.close-button {
  display: inline-block;
  color: #f88;
}

/* Inputs */

.input-container {
  width: 100%;
}

.input-container input::-webkit-input-placeholder,.input-container input[type=email],.input-container input[type=text],.input-container label,textarea {
  font-size: .94rem;
  font-family: Open Sans Condensed,sans-serif;
  color: #222;
  font-weight: 700;
  text-transform: uppercase
}

.input-container input::-moz-placeholder {
  font-size: .94rem;
  font-family: Open Sans Condensed,sans-serif;
  color: #222;
  font-weight: 700;
  text-transform: uppercase
}

.input-container input:-ms-input-placeholder {
  font-size: .94rem;
  font-family: Open Sans Condensed,sans-serif;
  color: #222;
  font-weight: 700;
  text-transform: uppercase
}

.input-container input::placeholder {
  font-size: .94rem;
  font-family: Open Sans Condensed,sans-serif;
  color: #222;
  font-weight: 700;
  text-transform: uppercase
}

.input-container input[type=email],.input-container input[type=text] {
  margin-top: 1.5rem
}

.input-container>label:after {
  height: 1px;
  background: #f3f3f3
}

.input-container {
  width: 100%;
  min-width: 100px;
  font-size: 1rem;
  line-height: 1.5rem
}

.input-container [disabled],.input-container [disabled]+label {
  opacity: .5
}

.input-container [disabled]:focus {
  outline: 0
}

.input-container>input,.input-container>select,.input-container>textarea {
  width: 100%;
  margin-top: 1rem;
  line-height: 1.5rem;
  border: 0;
  border-radius: 0;
  background: none;
  outline: 0
}

.input-container>input,.input-container>textarea {
  border-bottom: 1px dashed #f3f3f3;
  color: #222
}

.input-container>select {
  border-bottom: 1px solid #4a4a4a;
  color: #4a4a4a;
}

.input-container>label {
  color: #222;
  pointer-events: none;
  text-align: left;
  font-size: 1.125rem;
  line-height: 1rem;
  opacity: 0;
  -webkit-animation: .2s;
  animation: .2s;
  -webkit-animation-timing-function: cubic-bezier(.4,0,.2,1);
  animation-timing-function: cubic-bezier(.4,0,.2,1);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards
}

.input-container>input:focus,.input-container>select:focus,.input-container>textarea:focus {
  outline: 0
}

.input-container>input:focus::-webkit-input-placeholder,.input-container>select:focus::-webkit-input-placeholder,.input-container>textarea:focus::-webkit-input-placeholder {
  color: transparent
}

.input-container>input:focus::-moz-placeholder,.input-container>select:focus::-moz-placeholder,.input-container>textarea:focus::-moz-placeholder {
  color: transparent
}

.input-container>input:focus:-ms-input-placeholder,.input-container>select:focus:-ms-input-placeholder,.input-container>textarea:focus:-ms-input-placeholder {
  color: transparent
}

.input-container>input:focus::placeholder,.input-container>select:focus::placeholder,.input-container>textarea:focus::placeholder {
  color: transparent
}

.input-container>input:not(:placeholder-shown):not([disabled])+label,.input-container>select:not(:placeholder-shown):not([disabled])+label,.input-container>textarea:not(:placeholder-shown):not([disabled])+label {
  opacity: 1
}

.input-container>input:focus+label,.input-container>select:focus+label,.input-container>textarea:focus+label {
  -webkit-animation-name: c;
  animation-name: c
}

.input-container>label:after {
  content: "";
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 45%;
  background: #222;
  -webkit-transition: .2s;
  transition: .2s;
  -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  visibility: hidden;
  width: 10px
}

.input-container>input:focus+label:after,.input-container>select:focus+label:after,.input-container>textarea:focus+label:after {
  left: 0;
  width: 100%;
  visibility: visible
}

.input-container>input[type=search] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none
}

.input-container>input[type=range] {
  border-bottom: 0
}

.input-container>input[type=range]+label:after {
  display: none
}

.input-container>select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none
}

.input-container>select+label:before {
  content: "⌄";
  line-height: 1.5rem;
  position: absolute;
  right: 5px;
  zoom: 2;
  top: 0;
  bottom: 0;
  color: #222
}

.input-container input[type=checkbox],.input-container input[type=radio] {
  margin-top: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid #222;
  vertical-align: middle;
  margin-right: .5rem;
  text-align: center
}

.input-container input[type=radio] {
  border-radius: 15px
}

.input-container input[type=checkbox]:not([disabled])+label,.input-container input[type=radio]:not([disabled])+label {
  pointer-events: auto;
  -webkit-animation: none;
  animation: none;
  vertical-align: middle;
  opacity: 1;
  cursor: pointer
}

.input-container input[type=checkbox]+label:after,.input-container input[type=radio]+label:after {
  display: none
}

.input-container input[type=checkbox]:after,.input-container input[type=radio]:after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  content: " ";
  line-height: 1.4rem;
  vertical-align: middle;
  text-align: center;
  background-color: #fff
}

.input-container input[type=checkbox]:checked:after {
  background-color: #222;
  color: #fff;
  content: "✓"
}

.input-container input[type=radio]:checked {
  background-color: #fff
}

.input-container input[type=radio]:after {
  top: 3px;
  bottom: 3px;
  left: 3px;
  right: 3px;
  border-radius: 12px
}

.input-container input[type=radio]:checked:after {
  content: "";
  font-size: 3.5rem;
  background-color: #222
}

.input-container>label,_:-ms-lang(x) {
  opacity: 1
}

.input-container>input:-ms-input-placeholder,_:-ms-lang(x) {
  color: transparent
}

.input-container>input::placeholder,_:-ms-lang(x) {
  color: transparent
}

.input-container>input::-ms-input-placeholder,_:-ms-lang(x) {
  color: transparent
}

.input-container>select::-ms-expand {
  display: none
}

.radio-container {
  display: block;
  margin-bottom: .5rem
}

.radio-container label {
  font-family: Cardo,serif;
  font-weight: 400;
  text-transform: none;
  color: #222;
  font-size: .94rem
}

.radio-container input {
  position: relative;
}

.amp-mode-mouse .radio-container label:hover {
  text-decoration: underline;
}

.input-container-chk, .radio-container {
/*  width: auto; */
  color: #4a4a4a
}

.select-wrapper {
  position: relative;
  padding-right: 13px;
}

/* more globals */

.active {
  color: #000;
}


/* .header */

.header {
  display: flex;
  position: fixed;
  background-color: #fff;
  color: #000;
  height: 3.5rem;
  z-index: 999;
  padding: 0 1rem;
  left: 0;
  right: 0;
  align-items: center;
  box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
  border-bottom: 1px solid #f3f3f3;
}

.header+:not(amp-sidebar),.header+amp-sidebar+* {
  margin-top: 3.5rem
}

.header .ampstart-.menu-search:active,.header .ampstart-.menu-search:focus,.header .ampstart-.menu-search:hover {
  box-shadow: none
}

.header .ampstart-.menu-search:active,.header .ampstart-.menu-search:focus,.header .ampstart-.menu-search:hover {
  box-shadow: none
}

/* more header styles */

.header a {
  padding-bottom: 0;
  margin: 0 auto;
}

.header amp-img {
  margin: 0 auto;
}

.cart-icon-container {
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  padding: 1rem 1.5rem 0 0;
}

.cart-icon-container div {
  width: 25px;
}

/* menu-button */

.menu-open-button {
  position: absolute;
  top: 0;
  margin: 1rem 1rem 0 0;
  line-height: 3.5rem;
  font-size: 2.2rem;
  color: #222;
  font-size: 1.38rem;
  padding-right: 0
}

.menu-open-button:focus {
  outline: 5px auto -webkit-focus-ring-color
}

.menu-open-button:focus {
  outline: none;
}

.menu-open-button svg {
  pointer-events: none;
}

.menu a,.menu-open-button, amp-sidebar-faq a {
  cursor: pointer;
  text-decoration: none
}


/* Sidebar */

amp-sidebar {
  background-color: #fff;
  color: #000;
  min-width: 300px;
  width: 350px;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  height: 100%;
}

.menu-close-button {
  margin-top: 1rem;
  font-size: 1.5rem;
  line-height: normal;
  top: 0
}

.menu-close-button {
  line-height: inherit
}

amp-sidebar.ampstart-icon {
  fill: #f88
}

amp-sidebar .social {
    margin-top: 1rem;
}

amp-sidebar .social li {
  display: inline-block;
}

amp-sidebar .social li a {
  display: inline-block;
  padding: .5rem;
}

/* TODO: consider removing "amp-sidebar" from all of the following */

amp-sidebar.ampstart-.menu-dropdown {
  margin: 0
}

/* TODO: this has to supercede the margin: 0 0 2 rem rule */
amp-sidebar .ampstart-faq-item {
  margin: 0
}

/*
amp-sidebar .ampstart-dropdown-item, amp-sidebar .ampstart-dropdown header, amp-sidebar .ampstart-faq-item, amp-sidebar .ampstart-.menu-item, amp-sidebar .ampstart-social-follow {
  margin: 0 0 2rem
}
*/

amp-sidebar .social {
  margin:.5rem 0 1rem;
}

amp-sidebar h3 {
  font-size: .94rem;
  padding-top: 1.5rem;
}

.menu .label {
  color: inherit;
}

.menu {
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.menu li {
  color: #222;
  margin-bottom: 1rem;
}

.menu li:active, .menu li:focus, .menu li:hover {
  opacity: 1
}

.menu li.logo, .menu li.logo a {
  margin-bottom: 0;
}

/* does .ampstart-headerbar-.menu this ever get used? */
.ampstart-headerbar-.menu .ampstart-.menu-item {
  padding: 0 1rem;
  background: transparent;
  opacity: .8
}

.ampstart-headerbar-.menu {
  line-height: 3.5rem
}

.ampstart-headerbar-.menu {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.ampstart-.menu-search {
  -webkit-box-flex: 0.5;
  -ms-flex-positive: 0.5;
  flex-grow: 0.5
}

.ampstart-.menu-search>input {
  border: none;
  border-radius: 3px;
  line-height: normal
}

.ampstart-.menu-dropdown {
  min-width: 200px
}

.ampstart-.menu-dropdown amp-accordion header {
  background-color: #fff;
  border: none
}

.ampstart-.menu-dropdown amp-accordion ul {
  background-color: #fff
}

.ampstart-.menu-dropdown .ampstart-dropdown-item,.ampstart-.menu-dropdown .ampstart-dropdown>section>header {
  background-color: #fff;
  color: #000
}

.ampstart-.menu-dropdown .ampstart-dropdown-item {
  color: #f88
}

.menu-header {
  display: flex;
  line-height: 3.5rem;
  min-height: 3.5rem
}

.menu a {
  font-family: Open Sans Condensed,sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: normal;
  display: inline-block;
  margin-bottom: 1rem;
  position: relative
}

.amp-mode-mouse .menu li:after {
  background-color: #222;
  left: 0;
  position: absolute;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: left center;
  transform-origin: left center;
  -webkit-transition: -webkit-transform .3s cubic-bezier(.19,1,.22,1);
  transition: -webkit-transform .3s cubic-bezier(.19,1,.22,1);
  transition: transform .3s cubic-bezier(.19,1,.22,1);
  transition: transform .3s cubic-bezier(.19,1,.22,1),-webkit-transform .3s cubic-bezier(.19,1,.22,1);
  width: 100%;
  bottom: 0;
  height: 2px;
  content: "";
  display: block
}

.amp-mode-mouse .menu li:hover:after {
  -webkit-transform: scaleX(1);
  transform: scaleX(1)
}



/* removed seemingly redundant .ampstart-sidebar .ampstart-icon class here. But you never know. */
.ampstart-icon {
  fill: #222
}

.menu li amp-img {
  display: inline-block;
  width: 120px;
  margin-bottom: 2rem;
}

.ampstart-sidebar-header {
  position: relative;
  z-index: 1
}

amp-sidebar .faq {
  width: 100%;
  color: #222;
  font-family: Cardo,serif;
  padding-top: 1rem
}

amp-sidebar .faq li {
  line-height: normal;
  padding: 0 0 .5rem
}

.amp-mode-mouse amp-sidebar .faq li:hover {
  text-decoration: underline;
}



.ampstart-byline,.ampstart-caption,.ampstart-hint,.label {
  font-size: 1.125rem;
  color: #4f4f4f;
  line-height: 1.125rem;
  letter-spacing: .06rem
}

.label {
  text-transform: uppercase;
}


/* Main pages */
.landing, .listing {
  max-width: none;
}

/* Related products section.
 * This only appears on larger devices, so arguably it should be nested in a relevant media query.
 */

.related-products {
  border-top: 1px solid #f3f3f3;
}

.cart .related-products {
  width: 100%;
  padding: 0 2rem;
  border-top: none;
}

.related-products-area {
  width: 100%;
  margin-top: 1.5rem;
}

.related-products amp-carousel {
  padding: 0 2rem;
}

.related-products ul {
  margin: 15px 0;
}

.related-products ul li {
  display: inline-block;
  width: 105px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 1rem;
}

.amp-mode-mouse .related-products ul li:hover h6 {
  text-decoration: underline;
}

.related-products amp-img {
  margin-bottom: 1rem;
}

.related-products .amp-carousel-button {
  background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>') 30px 30px transparent;
  cursor: pointer;
  height: 30px;
  width: 30px;
  top: 40%
}

.related-products .amp-carousel-button-next,.related-products .amp-carousel-button-prev {
  display: initial;
}

.related-products .amp-carousel-button-prev {
  left: 0;
}

.related-products .amp-carousel-button-next {
  right: 0;
  -webkit-transform: translateY(-50%) rotate(180deg);
  transform: translateY(-50%) rotate(180deg)
}

/* Checkout page */

.checkout {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.checkout .commerce-cart-icon {
  display: none;
}

.checkout .commerce-cart-item {
  margin-left: 0;
}

.checkout-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  color: #cdcccd;
  font-size: .94rem;
  padding: 1rem;
}

.checkout-area {
  width: 100%;
  padding: 1rem 0 1.5rem;
}

.checkout-area h3 {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.checkout-area hr {
  margin: 1rem 1.5rem .5rem 1rem;
}

.checkout-step-area h5 {
  margin-bottom: 1rem;
}

.checkout-step-area {
  padding: 0 1rem;
}


.checkout-fields {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
}

.checkout-field {
  width: 50%;
  padding: 0 1rem;
}

.checkout-field .input-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.checkout-field input {
  padding: 0;
}

.checkout-field label {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.delivery-area {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;
}

.delivery-area h5 {
  width: 100%;
  margin: 1rem 0;
}

.radio-buttons {
  width: 100%;
}

.commerce-cart-notification .commerce-cart-icon, .checkout .commerce-cart-icon {
  display: none;
}



/* Main landing page. Used in index.html */

.hero-wrapper {
  overflow: hidden;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 1.5rem;
}

.hero-content h2 {
  font-size: 1.38rem;
  font-weight: 700;
}

.amp-mode-mouse .hero-wrapper amp-img {
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s,-webkit-transform 1s
}

.amp-mode-mouse .hero-wrapper:hover amp-img {
  -webkit-transform:scale(1.05);
  transform:scale(1.05);
}

.hero-wrapper amp-img .loading {
  margin-top: 200px;
}

.amp-mode-mouse .hero-wrapper:hover .hero-wrapper amp-img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05)
}

.hero-content p {
  padding: 1rem 1rem 1.5rem;
  font-family: Cardo,serif;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}


/* Product listings page */

.listing .banner {
  width: 100%;
}

.checkout-steps, .listing-filters {
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
}

.listing-filters {
  padding: 1rem 0 1rem 1rem;
}

.listing-filters .select-wrapper {
  display: inline-block;
}

.listing-filters select {
  color: #666;
}

.listing-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 2rem;
}

/* Changed .listing .sidebar to .sidebar to let .xs-hide and .sm-hide override display style. */
.sidebar {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.listing-container {
  width: 100%;
  padding: 1rem 0 1.5rem;
}

.listing-header {
  position: relative;
  align-items: center;
}

.listing-header h1 {
  flex: 1 1 auto;
  font-size: 1.75rem;
  padding: 0 1rem;
  margin: 0 0 1rem;
}

.listing amp-list {
  margin: 0 .5rem;
}

.listing-product {
  position: relative;
  display: inline-block;
  min-height: 275px;
  width: 50%;
  padding: 0 .5rem;
  margin-bottom: 1rem;
}

.listing-product>div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 275px;
}

.listing amp-list amp-img {
  margin-bottom: 1rem;
  border-bottom: 1px dashed #dadada;
}
/* doesn't seem to work on the original site either
.amp-mode-mouse .listing-product:hover>.listing-product-name {
  text-decoration: underline
}
*/

/* Cart page */

.cart {
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 1.5rem;
  align-items: flex-start;
}

.cart .related-products {
  border-top: none;
}

.cart .cart-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.checkout .cart-wrapper {
  margin-top: 1rem;
  padding: 0 1rem;
}

.cart-products-area {
  width: 100%;
  padding: 1rem 0 1.5rem;
}

.cart-products-area h3 {
  margin: 0 1rem 1rem;
}

.cart-product {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 1rem 1rem;
}

.cart-image-container {
  width: 25%;
}

.cart-product-left {
  width: 50%;
  padding: 0 .5rem;
}

.cart-product-left h6 {
  font-size: 1rem;
  margin-bottom: .5rem;
}

.cart-product-right {
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  align-items: flex-start;
  justify-content: space-around;
  width: 25%;
}

.cart-sum-area {
  width: 100%;
  padding: 1.5rem 1rem 2rem;
}

.cart-sum-area h5 { 
  font-size: 1.125rem;
}

.cart-sum-area dl {
  display: flex;
  flex-wrap: wrap;
}

.cart-sum-area dt {
  width: 83.3333%;
}

.cart-sum-area dd {
  width: 16.6667%;
  margin: 0;
  padding-bottom: 0.5rem;
  text-align: right;
}

.cart-sum-area .total {
  margin: 1.5rem 0 1rem;
  padding: 1rem 0;
  font-weight: 700;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
}

.cart-sum-area p {
  padding-bottom: 1.5rem;
}

.cart-actions {
  text-align: center;
}



/* Footer */

footer {
  background-color: #222;
  color: #fff;
  text-align: center;
}

footer h3 {
  padding-top: 0
}

.amp-mode-mouse footer a:hover {
  text-decoration: underline
}

footer h3 {
  color: #fff;
}

footer hr {
  width: 100%;
  background-color: #4a4a4a;
}

footer nav {
  max-width: 1280px;
  margin: 0 auto;
}

footer nav h2 {
  color: #fff;
  font-size: .94rem;
  padding-bottom: 1rem;
}

footer .ampstart-icon {
  fill: #6a6a6a
}

footer .ampstart-social-follow {
  display: inline-block;
  margin-bottom: 0;
}

.footer-main {
  display: flex;
  flex-wrap: wrap;
}

.footer-section {
  width: 100%;
  padding-top: 1.5rem;
}

.footer-section.social-section {
  padding: 2rem 0 1.5rem;
}

.footer-section h2 {
  font-size: .94rem;
  font-weight: 700;
  padding-bottom: 1rem;
  line-height: normal;
  letter-spacing: normal;
}

.footer-section ul {
  padding-bottom: 1.5rem;
}

.footer-section.social-section h2 {
  padding-bottom: 0;
}

.social-icons {
  display: inline-block;
  margin: 0;
}

.social-icons li {
  display: inline-block;
}

.social-icons li a {
  display: inline-block;
  padding: .5rem;
}

.footer-logo {
  flex: 1 1 auto;
  text-align: right;
  padding-right: 20px;
}


/* Placeholder, showing loading animation */


.loading,.loading:after,.loading:before {
  border-radius: 50%;
  width: .5rem;
  height: .5rem;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: a 1.44s infinite ease-in-out;
  animation: a 1.44s infinite ease-in-out;
  will-change: contents
}

.loading {
  color: #666;
  margin: 24% auto;
  -webkit-animation-delay: .16s;
  animation-delay: .16s
}

.loading:after,.loading:before {
  content: "";
  position: absolute;
  top: 0
}

.loading:before {
  left: -1rem;
  -webkit-animation-delay: 0s;
  animation-delay: 0s
}

.loading:after {
  left: 1rem;
  -webkit-animation-delay: .32s;
  animation-delay: .32s
}

.commerce .banner .loading {
  margin-top: 100px;
}



/* Other stuff */

.ampstart-social-follow li {
  display: inline-block;
  margin-right: 0;
}

/* Media queries */

@media (max-width:40rem) {
  .cart-product-left {
    margin-top: 2rem;
  }
}


@media (min-width:40.06rem) {
  .cart-image-container {
    width: 16.66667%;
  }

  .cart-product-left {
    width: 58.3333%;
  }  
}

@media (min-width:52.06rem) {
  main {
    min-height: calc(100vh - 181px - 5rem);
  }

  hr {
    width: 100%;
    margin: 0;
  }  

  .side-panel {
    position: -webkit-sticky;
    position: sticky;
    top: 5rem
  }

  .header+:not(amp-sidebar), .header+amp-sidebar+*, main {
    margin-top: 5rem
  }

  .header {
    height: 5rem;
    border-bottom-color: #f3f3f3
  }

  .header .menu-open-button {
    margin-left: .5rem;
    top: .5rem
  }

  amp-sidebar.menu-button {
    margin-top: .5rem;
    padding-top: 0;
  }

  amp-sidebar {
    width: 25%;
  }

  .ampstart-sidebar-header {
    position: absolute;
    top: 1rem;
    left: 2rem
  }  

  .ampstart-sidebar-.menu {
    display: inline-block;
    text-align: center;
  }

  .hero-wrapper {
    position: relative;
    text-align: left;
    color: #fff;
  }

  .hero-wrapper .button {
    margin-left: 2rem;
    background-color: #fff;
    border: none;
    color: #222;
    font-size: .94rem
  }

  .hero-content h2 {
    color: #fff;
    font-size: 3.5rem;
    padding-left: 2rem;
    margin-bottom: 1rem;
    max-width: 500px;
  }

  .hero-align {
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
  }

  .hero-content {
    position: absolute;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .hero-content p {
    font-size: 1rem;
    margin-bottom: 2rem;
    margin-left: 0;
    padding-left: 2rem;
  }

  .hero-content-theme-secondary,.hero-content-theme-secondary .hero-content-title {
    color: #222
  }

  .button.button-lg-black {
    color: #fff;
    background-color: #222;
  }

  .amp-mode-mouse .hero-content-theme-secondary .button:hover {
    background-color: #fff;
    color: #222
  }

  .listing .side-panel {
    position: sticky;
    align-self: center;
    padding: 2rem 2rem 0 0;
  }

  .listing .side-panel h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  .listing-container {
    padding: .5rem 2rem 5rem;
    width: 58.33333%;
  }

  .listing-header {
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem 0 1rem;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
  }

  .listing-header h1 {
    margin-top: 1rem;
  }

  .listing amp-list {
    margin: 0 -.5rem;
  }

  .listing-product {
    width: 25%;
    margin-bottom: 2rem;
  }

  .listing-filters {
    border: none;
  }

  footer {
    text-align: initial;
  }

  footer nav {
    padding: 2.5rem 0;
  }

  .footer-section {
    width: 25%;
    padding: 0 2rem;
  }

  .footer-section.social-section {
    padding: 0 0 1.5rem;
  }

  .footer-section.social-section li:first-child a {
    padding-left: 0;
  }

  .cart {
    margin-bottom: 1.5rem;
    padding-bottom: 5rem;
  }

  .cart-products-area {
    padding: 2rem 0 5rem;
    width: 66.66667%;
  }

  .cart-products-area h3 {
    margin: 0 2rem 1rem 2rem;
  }

  .cart-product {
    border-bottom: solid 1px #f3f3f3;
    margin: 1.5rem 2rem 1rem 0;
    padding-bottom: 1.5rem;
  }

  .cart .cart-product {
    margin-left: 2rem;
  }

  .cart-product-right {
    justify-content: space-between;
  }

  .cart-sum-area {
    width: 33.3333%;
    padding: 2rem 1.5rem;
  }

  .cart-sum-area h5 { 
    margin-top: 1.5rem;
  }

  .cart-actions {
    text-align: left;
  }

  .cart-image-container amp-img {
    max-width: 100px;
  }

  .related-products-area {
    margin-top: 2rem;
  }

  .checkout-actions {
    text-align: initial;
    margin-top: 1.5rem;
  }

  .checkout-steps {
    max-width: 350px;
    border: none;
    margin-left: 1rem;
    padding: 1rem 0;
  }

  .checkout-area {
    width: 66.66667%;
    padding: 2rem 2rem 5rem;
  }

  .checkout-step-area {
    margin-top: 1.5rem;
  }

  .delivery-area {
    padding: 1.5rem 1rem;
  }
}



/* Hide! 
 * Note: these should appear last in the file so they can overwrite other display properties. 
 */

@media (max-width:40rem) {
  .xs-hide {
    display: none;
  }
}

@media (min-width:40.06rem) and (max-width:52rem) {
  .sm-hide {
    display: none;
  }
}

@media (min-width:52.06rem) and (max-width:64rem) {
  .md-hide {
    display: none;
  }
}

@media (min-width:64.06rem) {
  .lg-hide {
    display: none;
  }
}

# merge-new.css

/* TODO: resolve below */
header {
    top:0;
}
nav .social-icons {
	padding-bottom: 0;
}

/* New styles */
#order {
    width: 100%;
}
.unavailable {
    position: relative;
    background: gray;
    overflow: hidden;
    opacity: .6;
    pointer-events: none;
    user-select: none
}
.unavailable:after,
.unavailable:before {
    position: absolute;
    content: '';
    background: grey;
    display: block;
    width: auto;
    height: 1px;
    min-width: 56px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: -11px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-bottom: 2px solid
}
.unavailable:after {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}
.contact .checkout-field {
    padding: 0;
    font-size: 1rem;
}
.listing-container amp-list {
    margin-top: .45rem;
}
.listing-content .side-panel button,
.listing-content .commerce-select button {
    background: none;
    box-shadow: none;
    border-radius: 0px;
    width:80px;
}
.listing-filters label {
    display: block;
    margin-bottom: 0.45rem; 
}
.listing-product h2 {
    font-size: 1rem;
}
  `}</style>
    <NavBar />
    <main id="content" role="main" className="landing">
        <section className="hero-wrapper">
            <a href="/product-listing-women.html" className="block">
                <amp-img src="/static/img/e-commerce/narrow-women.jpg" width="2.22" height="1" layout="responsive" media="(max-width: 52.06rem)" alt="Hero Landing 1" noloading="">
                    <div placeholder="" className="loading"></div>
                </amp-img>
                <amp-img src="/static/img/e-commerce/wide-women.jpg" width="2.7" height="1" layout="responsive" media="(min-width: 52.07rem)" alt="Hero Landing 1" noloading="">
                    <div placeholder="" className="loading"></div>
                </amp-img>
                <div className="hero-content">
                    <div className="hero-align">
                        <h2>Women's Clothing</h2>
                        <p>When the temperatures plummet, we look for clothing and clothing accessories to protect us from cold and wind chill.</p>
                        <div className="button button-white caps">shop</div>
                    </div>
                </div>
            </a>
        </section>
        <section className="hero-wrapper">
            <a href="/product-listing-men.html" className="block">
                <amp-img src="/static/img/e-commerce/narrow-men.jpg" width="2.22" height="1" layout="responsive" media="(max-width: 52.06rem)" alt="Hero Landing 1" noloading="">
                    <div placeholder="" className="loading"></div>
                </amp-img>
                <amp-img src="/static/img/e-commerce/wide-men.jpg" width="2.7" height="1" layout="responsive" media="(min-width: 52.07rem)" alt="Hero Landing 1" noloading="">
                    <div placeholder="" className="loading"></div>
                </amp-img>
                <div className="hero-content">
                    <div className="hero-align">
                        <h2>Men's Clothing</h2>
                        <p>With garments from over thirty of the industry’s leading manufacturers, Campmor has hundreds of Men’s jackets and vests from which to choose.</p>
                        <div className="button button-white caps">shop</div>
                    </div>
                </div>
            </a>
        </section>
    </main>
    <Footer />
  </>
);
