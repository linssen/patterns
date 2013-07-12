Patterns
==============================================================================

- Dynamically generate documentation from your front end standards.
- Maintain a separation of concerns by keeping atoms separate from molecules.
- One point of origin for all atoms means, update once, benefit everywhere.
- Build molecules, organisms, pages and templates up of their indavidual
  concerns.
- Friendly templating language

### Source

Template: `atoms/button.html`

    {% macro btn_primary(value='Primary button') -%}
        <input type="button" value="{{ value|e }}" class="btn btn-primary">
    {%- endmacro %}

    {% macro btn_secondary(value='Secondary button') -%}
        <input type="button" value="{{ value|e }}" class="btn btn-secondary">
    {%- endmacro %}

Template: `molecules/form.html`

    {% import 'atoms/button.html' as buttons %}

    <form>
        <fieldset>
            <div>
                There would be loads more stuff here
            </div>
            <div>
                {{ buttons.btn_primary(value='Submit me') }}
                {{ buttons.btn_secondary(value='Cancel me') }}
            </div>
        </fieldset>
    </form>

### Result

![screen shot 2013-07-12 at 11 40 43](https://f.cloud.github.com/assets/67624/787641/90a387f4-eadf-11e2-867f-2737635737a6.png)


Install
------------------------------------------------------------------------------

### Python

    $ git clone https://github.com/linssen/patterns.git
    $ virtualenv --distribute env && source env/bin/activate
    $ pip install -r requirements.txt

### Grunt

    $ npm install
    $ grunt dev

Run
------------------------------------------------------------------------------

    $ python patterns/app.py
