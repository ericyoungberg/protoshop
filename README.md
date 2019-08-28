# ProtoShop
## Prototype tool to help with designing in the browser


### Example

```html
<body>
    <div data-artboard>
        <div class="map-wrapper">
            <div class="point-panel" data-layer="panel">
                <button data-to="add">Add Point +</button>

                <ul class="points">
                    <li class="point" data-to="delete">
                        <!-- a bunch of stuff irrelevent to this example -->
                    </li>

                    <li class="point" data-to="delete">
                        <!-- a bunch of stuff irrelevent to this example -->
                    </li>
                </ul>
            </div>

            <i class="leaflet-marker" data-layer="map-marker"></i>
        </div>

        <div class="modal" data-layer="modal">
            <div class="modal__gutter"> 
            </div>

            <div class="delete-modal modal__window" data-layer="delete-modal">
                <!-- a bunch of stuff irrelevent to this example -->
            </div>
        </div>
    </div>

    <div data-artboard>
    </div>

    <script>
        protoshop.groups = {
            add: ['panel', 'map-marker'],
            delete: ['panel', 'modal', 'delete-modal'],
        };
    </script>
</body>
```


### Concepts
#### Artboard
#### Layer
#### Groups
