COMPONENTS=$(wildcard components/*)
LAYOUTS=$(wildcard layouts/*)
PAGES=$(wildcard pages/*)
CSS=$(wildcard styles/*.css) $(wildcard styles/**/*)
FILES=$(PAGES:pages/%.jsx=%.html)

%.html: pages/%.jsx $(COMPONENTS) $(LAYOUTS)
	@scripts/build_page $*
	@echo "built $@"

all: $(FILES) bundle.css

bundle.css: $(CSS)
	@cat $^ > $@
	@cleancss -o $@.tmp $@
	@mv $@.tmp $@
	@echo "built $@"
