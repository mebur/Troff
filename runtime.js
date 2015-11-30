/*
This file is part of Troff.

Troff is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Troff is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Troff.  If not, see <http://www.gnu.org/licenses/>.
*/

chrome.app.runtime.onLaunched.addListener(function(data) {
  chrome.app.window.create(
    'page.html',
    {bounds: {width:900, height:600}, minWidth:470, minHeight:370,  id:"TroffWin"}
  );
  chrome.app.window.create(
    'help.html',
    {bounds: {width:600, height:400}, minWidth:300, minHeight:200,  id:"TroffWin"}
  );
});
