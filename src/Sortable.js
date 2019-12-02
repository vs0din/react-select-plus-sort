import React                                  from 'react';
import Value                                  from './Value';

var Sortable = require('react-sortable-hoc');
var SortableContainer = Sortable.SortableContainer;
var SortableElement = Sortable.SortableElement;

export const SortableItem = SortableElement(( props )=>
<Value {...props}/>);

export const SortableTags = SortableContainer(({
	 valueArray,
	 disabled,
	 _instancePrefix,
	 valueKey,
	 removeValue,
	 placeholder,
	 renderLabel,
     isDeleteRight,
	 onClick,
	 input,
	 minSelected
  })=>{
	const isDeletable = minSelected < valueArray.length;
	return (
		<span className="Select-multi-value-wrapper" id={_instancePrefix + '-value'}>
		{valueArray.map((value, i) => {
			return (
					<SortableItem
						disabled={
							disabled||
							value.clearableValue === false ||
							!(minSelected < valueArray.length)
						}
						id={_instancePrefix + '-value-' + i}
						instancePrefix={_instancePrefix}
						onRemove={removeValue}
						placeholder={placeholder}
            isDeleteRight={isDeleteRight}
						key={`item-${i}`}
						index={i}
						value={value}
					>
						{renderLabel(value, i)}
						<span className="Select-aria-only">&nbsp;</span>
					</SortableItem>
				);
			})
		}
		{input}
		</span>
	);
});

export default SortableTags;
