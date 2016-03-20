MIXINS=$(wildcard mixins/*)
LAYOUTS=$(wildcard layouts/*)
PAGES=$(wildcard pages/*)
CSS=$(wildcard styles/*.css) $(wildcard styles/**/*)
FILES=$(PAGES:pages/%.jade=%.html)

%.html: pages/%.jade $(MIXINS) $(LAYOUTS)
	@scripts/build_page $*
	@echo "built $@"

all: $(FILES) bundle.css

bundle.css: $(CSS)
	@cat $^ > $@
	@cleancss -o $@.tmp $@
	@mv $@.tmp $@
	@echo "built $@"
