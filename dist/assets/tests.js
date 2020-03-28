'use strict';

define("my-site/tests/integration/components/blouse-design-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | blouse-design', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "34ne0nQU",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"blouse-design\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "V+tXTb33",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"blouse-design\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("my-site/tests/integration/components/bridal-embroider-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | bridal-embroider', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Tnhh3oD9",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"bridal-embroider\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "3pV/qVo6",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"bridal-embroider\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("my-site/tests/integration/components/chudi-dhar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | chudi-dhar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "L4OrQxNS",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"chudi-dhar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "+OkcRNvx",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"chudi-dhar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("my-site/tests/integration/components/uniform-school-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | uniform-school', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "GsLGuxEC",
        "block": "{\"symbols\":[],\"statements\":[[1,[23,\"uniform-school\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "sPqntMRP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uniform-school\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("my-site/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/blouse-design.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/blouse-design.js should pass ESLint\n\n');
  });
  QUnit.test('components/bridal-embroider.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/bridal-embroider.js should pass ESLint\n\n');
  });
  QUnit.test('components/chudi-dhar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/chudi-dhar.js should pass ESLint\n\n');
  });
  QUnit.test('components/uniform-school.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/uniform-school.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/angeldresses.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/angeldresses.js should pass ESLint\n\n');
  });
  QUnit.test('routes/blouse.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blouse.js should pass ESLint\n\n');
  });
  QUnit.test('routes/bridal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bridal.js should pass ESLint\n\n');
  });
  QUnit.test('routes/chudidhar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/chudidhar.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/uniform.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/uniform.js should pass ESLint\n\n');
  });
});
define("my-site/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('my-site/templates/angeldresses.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'my-site/templates/angeldresses.hbs should pass TemplateLint.\n\nmy-site/templates/angeldresses.hbs\n  7:4  error  Incorrect indentation for `<div>` beginning at L7:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  12:8  error  Incorrect indentation for `<h3>` beginning at L12:C8. Expected `<h3>` to be at an indentation of 2 but was found at 8.  block-indentation\n  13:8  error  Incorrect indentation for `<h4>` beginning at L13:C8. Expected `<h4>` to be at an indentation of 2 but was found at 8.  block-indentation\n  17:4  error  Incorrect indentation for `<div>` beginning at L17:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  23:4  error  Incorrect indentation for `<h2>` beginning at L23:C4. Expected `<h2>` to be at an indentation of 2 but was found at 4.  block-indentation\n  28:4  error  Incorrect indentation for `<div>` beginning at L28:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  7:8  error  Incorrect indentation for `We customize clothings the way you desire.` beginning at L7:C8. Expected `We customize clothings the way you desire.` to be at an indentation of 6 but was found at 8.  block-indentation\n  15:0  error  Incorrect indentation for `Bridal Blouse, Designer Chudidhars, Fancy salwar, Party Lehenga choli, Western Gown, frock\nfor kids, School uniforms, uniform Coats, Pinoforms etc.\n        ` beginning at L15:C0. Expected `Bridal Blouse, Designer Chudidhars, Fancy salwar, Party Lehenga choli, Western Gown, frock\nfor kids, School uniforms, uniform Coats, Pinoforms etc.\n        ` to be at an indentation of 10 but was found at 0.  block-indentation\n  18:8  error  Incorrect indentation for `<iframe>` beginning at L18:C8. Expected `<iframe>` to be at an indentation of 6 but was found at 8.  block-indentation\n  23:8  error  Incorrect indentation for `No. 275, First Floor, GPK Building, Sathy Road, Ganapathy, Coimbatore- 641006 ` beginning at L23:C8. Expected `No. 275, First Floor, GPK Building, Sathy Road, Ganapathy, Coimbatore- 641006 ` to be at an indentation of 6 but was found at 8.  block-indentation\n  28:8  error  Incorrect indentation for `Follow us on ` beginning at L28:C8. Expected `Follow us on ` to be at an indentation of 6 but was found at 8.  block-indentation\n  30:8  error  Incorrect indentation for `<a>` beginning at L30:C8. Expected `<a>` to be at an indentation of 6 but was found at 8.  block-indentation\n  31:8  error  Incorrect indentation for `<img>` beginning at L31:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  32:8  error  Incorrect indentation for `<span>` beginning at L32:C8. Expected `<span>` to be at an indentation of 6 but was found at 8.  block-indentation\n  33:12  error  Incorrect indentation for `9043800600\n        ` beginning at L33:C12. Expected `9043800600\n        ` to be at an indentation of 10 but was found at 12.  block-indentation\n  4:21  error  img tags must have an alt attribute  img-alt-attributes\n  30:69  error  img tags must have an alt attribute  img-alt-attributes\n  31:8  error  img tags must have an alt attribute  img-alt-attributes\n  20:53  error  elements cannot have inline styles  no-inline-styles\n  30:101  error  elements cannot have inline styles  no-inline-styles\n  31:40  error  elements cannot have inline styles  no-inline-styles\n  8:50  error  Self-closing a void element is redundant  self-closing-void-elements\n  24:86  error  Self-closing a void element is redundant  self-closing-void-elements\n  25:51  error  Self-closing a void element is redundant  self-closing-void-elements\n  29:21  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('my-site/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'my-site/templates/application.hbs should pass TemplateLint.\n\nmy-site/templates/application.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `<span>` beginning at L9:C4. Expected `<span>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:8  error  Incorrect indentation for `{{#link-to}}` beginning at L4:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  5:8  error  Incorrect indentation for `{{#link-to}}` beginning at L5:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  6:8  error  Incorrect indentation for `{{#link-to}}` beginning at L6:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `{{#link-to}}` beginning at L7:C8. Expected `{{#link-to}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  2:49  error  img tags must have an alt attribute  img-alt-attributes\n  9:43  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('my-site/templates/blouse.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'my-site/templates/blouse.hbs should pass TemplateLint.\n\nmy-site/templates/blouse.hbs\n  2:4  error  Incorrect indentation for `<img>` beginning at L2:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<img>` beginning at L3:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<img>` beginning at L4:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  2:4  error  img tags must have an alt attribute  img-alt-attributes\n  3:4  error  img tags must have an alt attribute  img-alt-attributes\n  4:4  error  img tags must have an alt attribute  img-alt-attributes\n');
  });
  QUnit.test('my-site/templates/bridal.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'my-site/templates/bridal.hbs should pass TemplateLint.\n\nmy-site/templates/bridal.hbs\n  2:4  error  Incorrect indentation for `<img>` beginning at L2:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<img>` beginning at L3:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<img>` beginning at L4:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  2:4  error  img tags must have an alt attribute  img-alt-attributes\n  3:4  error  img tags must have an alt attribute  img-alt-attributes\n  4:4  error  img tags must have an alt attribute  img-alt-attributes\n');
  });
  QUnit.test('my-site/templates/chudidhar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'my-site/templates/chudidhar.hbs should pass TemplateLint.\n\nmy-site/templates/chudidhar.hbs\n  2:4  error  Incorrect indentation for `<img>` beginning at L2:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  2:4  error  img tags must have an alt attribute  img-alt-attributes\n');
  });
  QUnit.test('my-site/templates/components/blouse-design.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'my-site/templates/components/blouse-design.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('my-site/templates/components/bridal-embroider.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'my-site/templates/components/bridal-embroider.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('my-site/templates/components/chudi-dhar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'my-site/templates/components/chudi-dhar.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('my-site/templates/components/uniform-school.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'my-site/templates/components/uniform-school.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('my-site/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'my-site/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('my-site/templates/uniform.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'my-site/templates/uniform.hbs should pass TemplateLint.\n\nmy-site/templates/uniform.hbs\n  2:4  error  Incorrect indentation for `<img>` beginning at L2:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<img>` beginning at L3:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<img>` beginning at L4:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<img>` beginning at L5:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  2:4  error  img tags must have an alt attribute  img-alt-attributes\n  3:4  error  img tags must have an alt attribute  img-alt-attributes\n  4:4  error  img tags must have an alt attribute  img-alt-attributes\n  5:4  error  img tags must have an alt attribute  img-alt-attributes\n');
  });
});
define("my-site/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/blouse-design-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/blouse-design-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/bridal-embroider-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bridal-embroider-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/chudi-dhar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/chudi-dhar-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/uniform-school-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uniform-school-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/angeldresses-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/angeldresses-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/blouse-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/blouse-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/bridal-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bridal-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/chudidhar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/chudidhar-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/uniform-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/uniform-test.js should pass ESLint\n\n');
  });
});
define("my-site/tests/test-helper", ["my-site/app", "my-site/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("my-site/tests/unit/routes/angeldresses-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("my-site/tests/unit/routes/blouse-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | blouse', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:blouse');
      assert.ok(route);
    });
  });
});
define("my-site/tests/unit/routes/bridal-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | bridal', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bridal');
      assert.ok(route);
    });
  });
});
define("my-site/tests/unit/routes/chudidhar-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | chudidhar', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:chudidhar');
      assert.ok(route);
    });
  });
});
define("my-site/tests/unit/routes/uniform-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | uniform', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:uniform');
      assert.ok(route);
    });
  });
});
define('my-site/config/environment', [], function() {
  var prefix = 'my-site';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('my-site/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
