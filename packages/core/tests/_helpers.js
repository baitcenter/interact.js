/* eslint-disable no-restricted-syntax */
import { doc } from '@interactjs/_dev/test/domator';
import * as utils from '@interactjs/utils';
import Signals from '@interactjs/utils/Signals';
import Eventable from '../Eventable';
import { createScope } from '../scope';
let counter = 0;
export function unique() {
    return (counter++);
}
export function uniqueProps(obj) {
    for (const prop in obj) {
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }
        if (utils.is.object(obj)) {
            uniqueProps(obj[prop]);
        }
        else {
            obj[prop] = (counter++);
        }
    }
}
export function newCoordsSet(n = 0) {
    return {
        start: {
            page: { x: n++, y: n++ },
            client: { x: n++, y: n++ },
            timeStamp: n++,
        },
        cur: {
            page: { x: n++, y: n++ },
            client: { x: n++, y: n++ },
            timeStamp: n++,
        },
        prev: {
            page: { x: n++, y: n++ },
            client: { x: n++, y: n++ },
            timeStamp: n++,
        },
        delta: {
            page: { x: n++, y: n++ },
            client: { x: n++, y: n++ },
            timeStamp: n++,
        },
        velocity: {
            page: { x: n++, y: n++ },
            client: { x: n++, y: n++ },
            timeStamp: n++,
        },
    };
}
export function newPointer(n = 50) {
    return {
        pointerId: n++,
        pageX: n++,
        pageY: n++,
        clientX: n++,
        clientY: n++,
    };
}
export function mockScope(options = {}) {
    const document = options.document || doc;
    const window = document.defaultView;
    const scope = createScope().init(window);
    scope.interact = Object.assign(() => { }, { use() { } });
    return scope;
}
export function mockSignals() {
    return {
        on() { },
        off() { },
        fire() { },
    };
}
export function mockInteractable(props = {}) {
    return Object.assign({
        _signals: new Signals(),
        _actions: {
            names: [],
            methodDict: {},
        },
        options: {
            deltaSource: 'page',
        },
        target: {},
        events: new Eventable(),
        getRect() {
            return this.element
                ? utils.dom.getElementClientRect(this.element)
                : { left: 0, top: 0, right: 0, bottom: 0 };
        },
        fire(event) {
            this.events.fire(event);
        },
    }, props);
}
export function getProps(src, props) {
    return props.reduce((acc, prop) => {
        acc[prop] = src[prop];
        return acc;
    }, {});
}
export function testEnv({ plugins = [], target, rect = { top: 0, left: 0, bottom: 0, right: 0 }, } = {}) {
    const scope = mockScope();
    for (const plugin of plugins) {
        scope.usePlugin(plugin);
    }
    target = target || scope.document.body;
    const interaction = scope.interactions.new({});
    const interactable = scope.interactables.new(target);
    const coords = utils.pointer.newCoords();
    coords.target = target;
    const event = utils.pointer.coordsToEvent(coords);
    interactable.rectChecker(() => ({ ...rect }));
    return {
        scope,
        interaction,
        target,
        interactable,
        coords,
        event,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2hlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJfaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLCtCQUErQixDQUFBO0FBQ25ELE9BQU8sS0FBSyxLQUFLLE1BQU0sbUJBQW1CLENBQUE7QUFFMUMsT0FBTyxPQUFPLE1BQU0sMkJBQTJCLENBQUE7QUFDL0MsT0FBTyxTQUFTLE1BQU0sY0FBYyxDQUFBO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFBO0FBRWYsTUFBTSxVQUFVLE1BQU07SUFDcEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7QUFDcEIsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUUsR0FBRztJQUM5QixLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLFNBQVE7U0FBRTtRQUUzQyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtTQUN2QjthQUNJO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtTQUN4QjtLQUNGO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUUsQ0FBQyxHQUFHLENBQUM7SUFDakMsT0FBTztRQUNMLEtBQUssRUFBRTtZQUNMLElBQUksRUFBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxFQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENB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LEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3BELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFnQixDQUFBO0lBRXRELE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRWpELFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBRTdDLE9BQU87UUFDTCxLQUFLO1FBQ0wsV0FBVztRQUNYLE1BQU07UUFDTixZQUFZO1FBQ1osTUFBTTtRQUNOLEtBQUs7S0FDTixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgeyBkb2MgfSBmcm9tICdAaW50ZXJhY3Rqcy9fZGV2L3Rlc3QvZG9tYXRvcidcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ0BpbnRlcmFjdGpzL3V0aWxzJ1xuaW1wb3J0IHsgTW9ja0Nvb3JkcyB9IGZyb20gJ0BpbnRlcmFjdGpzL3V0aWxzL3BvaW50ZXJVdGlscydcbmltcG9ydCBTaWduYWxzIGZyb20gJ0BpbnRlcmFjdGpzL3V0aWxzL1NpZ25hbHMnXG5pbXBvcnQgRXZlbnRhYmxlIGZyb20gJy4uL0V2ZW50YWJsZSdcbmltcG9ydCB7IGNyZWF0ZVNjb3BlIH0gZnJvbSAnLi4vc2NvcGUnXG5cbmxldCBjb3VudGVyID0gMFxuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlICgpIHtcbiAgcmV0dXJuIChjb3VudGVyKyspXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWVQcm9wcyAob2JqKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgeyBjb250aW51ZSB9XG5cbiAgICBpZiAodXRpbHMuaXMub2JqZWN0KG9iaikpIHtcbiAgICAgIHVuaXF1ZVByb3BzKG9ialtwcm9wXSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvYmpbcHJvcF0gPSAoY291bnRlcisrKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3Q29vcmRzU2V0IChuID0gMCkge1xuICByZXR1cm4ge1xuICAgIHN0YXJ0OiB7XG4gICAgICBwYWdlICAgICA6IHsgeDogbisrLCB5OiBuKysgfSxcbiAgICAgIGNsaWVudCAgIDogeyB4OiBuKyssIHk6IG4rKyB9LFxuICAgICAgdGltZVN0YW1wOiBuKyssXG4gICAgfSxcbiAgICBjdXI6IHtcbiAgICAgIHBhZ2UgICAgIDogeyB4OiBuKyssIHk6IG4rKyB9LFxuICAgICAgY2xpZW50ICAgOiB7IHg6IG4rKywgeTogbisrIH0sXG4gICAgICB0aW1lU3RhbXA6IG4rKyxcbiAgICB9LFxuICAgIHByZXY6IHtcbiAgICAgIHBhZ2UgICAgIDogeyB4OiBuKyssIHk6IG4rKyB9LFxuICAgICAgY2xpZW50ICAgOiB7IHg6IG4rKywgeTogbisrIH0sXG4gICAgICB0aW1lU3RhbXA6IG4rKyxcbiAgICB9LFxuICAgIGRlbHRhOiB7XG4gICAgICBwYWdlICAgICA6IHsgeDogbisrLCB5OiBuKysgfSxcbiAgICAgIGNsaWVudCAgIDogeyB4OiBuKyssIHk6IG4rKyB9LFxuICAgICAgdGltZVN0YW1wOiBuKyssXG4gICAgfSxcbiAgICB2ZWxvY2l0eToge1xuICAgICAgcGFnZSAgICAgOiB7IHg6IG4rKywgeTogbisrIH0sXG4gICAgICBjbGllbnQgICA6IHsgeDogbisrLCB5OiBuKysgfSxcbiAgICAgIHRpbWVTdGFtcDogbisrLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1BvaW50ZXIgKG4gPSA1MCkge1xuICByZXR1cm4ge1xuICAgIHBvaW50ZXJJZDogbisrLFxuICAgIHBhZ2VYOiBuKyssXG4gICAgcGFnZVk6IG4rKyxcbiAgICBjbGllbnRYOiBuKyssXG4gICAgY2xpZW50WTogbisrLFxuICB9IGFzIEludGVyYWN0LlBvaW50ZXJUeXBlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2NrU2NvcGUgKG9wdGlvbnMgPSB7fSBhcyBhbnkpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBvcHRpb25zLmRvY3VtZW50IHx8IGRvY1xuICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0Vmlld1xuXG4gIGNvbnN0IHNjb3BlOiBhbnkgPSBjcmVhdGVTY29wZSgpLmluaXQod2luZG93KVxuXG4gIHNjb3BlLmludGVyYWN0ID0gT2JqZWN0LmFzc2lnbigoKSA9PiB7fSwgeyB1c2UgKCkge30gfSkgYXMgYW55XG5cbiAgcmV0dXJuIHNjb3BlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2NrU2lnbmFscyAoKSB7XG4gIHJldHVybiB7XG4gICAgb24gKCkge30sXG4gICAgb2ZmICgpIHt9LFxuICAgIGZpcmUgKCkge30sXG4gIH0gYXMgdW5rbm93biBhcyBhbnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vY2tJbnRlcmFjdGFibGUgKHByb3BzID0ge30pIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgX3NpZ25hbHM6IG5ldyBTaWduYWxzKCksXG4gICAgICBfYWN0aW9uczoge1xuICAgICAgICBuYW1lczogW10sXG4gICAgICAgIG1ldGhvZERpY3Q6IHt9LFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgZGVsdGFTb3VyY2U6ICdwYWdlJyxcbiAgICAgIH0sXG4gICAgICB0YXJnZXQ6IHt9LFxuICAgICAgZXZlbnRzOiBuZXcgRXZlbnRhYmxlKCksXG4gICAgICBnZXRSZWN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFxuICAgICAgICAgID8gdXRpbHMuZG9tLmdldEVsZW1lbnRDbGllbnRSZWN0KHRoaXMuZWxlbWVudClcbiAgICAgICAgICA6IHsgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwIH1cbiAgICAgIH0sXG4gICAgICBmaXJlIChldmVudCkge1xuICAgICAgICB0aGlzLmV2ZW50cy5maXJlKGV2ZW50KVxuICAgICAgfSxcbiAgICB9LFxuICAgIHByb3BzKSBhcyBhbnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BzPFQgZXh0ZW5kcyB7fSwgSyBleHRlbmRzIGtleW9mIFQ+IChzcmM6IFQsIHByb3BzOiBLW10pIHtcbiAgcmV0dXJuIHByb3BzLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgYWNjW3Byb3BdID0gc3JjW3Byb3BdXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSBhcyBQaWNrPFQsIEs+KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdEVudiAoe1xuICBwbHVnaW5zID0gW10sXG4gIHRhcmdldCxcbiAgcmVjdCA9IHsgIHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwLCByaWdodDogMCAgfSxcbn06IHtcbiAgcGx1Z2lucz86IEludGVyYWN0LlBsdWdpbltdLFxuICB0YXJnZXQ/OiBJbnRlcmFjdC5UYXJnZXQsXG4gIHJlY3Q/OiBJbnRlcmFjdC5SZWN0LFxufSA9IHt9KSB7XG4gIGNvbnN0IHNjb3BlOiBJbnRlcmFjdC5TY29wZSA9IG1vY2tTY29wZSgpXG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIHNjb3BlLnVzZVBsdWdpbihwbHVnaW4pXG4gIH1cblxuICB0YXJnZXQgPSB0YXJnZXQgfHwgc2NvcGUuZG9jdW1lbnQuYm9keVxuXG4gIGNvbnN0IGludGVyYWN0aW9uID0gc2NvcGUuaW50ZXJhY3Rpb25zLm5ldyh7fSlcbiAgY29uc3QgaW50ZXJhY3RhYmxlID0gc2NvcGUuaW50ZXJhY3RhYmxlcy5uZXcodGFyZ2V0KVxuICBjb25zdCBjb29yZHMgPSB1dGlscy5wb2ludGVyLm5ld0Nvb3JkcygpIGFzIE1vY2tDb29yZHNcblxuICBjb29yZHMudGFyZ2V0ID0gdGFyZ2V0XG4gIGNvbnN0IGV2ZW50ID0gdXRpbHMucG9pbnRlci5jb29yZHNUb0V2ZW50KGNvb3JkcylcblxuICBpbnRlcmFjdGFibGUucmVjdENoZWNrZXIoKCkgPT4gKHsgLi4ucmVjdCB9KSlcblxuICByZXR1cm4ge1xuICAgIHNjb3BlLFxuICAgIGludGVyYWN0aW9uLFxuICAgIHRhcmdldCxcbiAgICBpbnRlcmFjdGFibGUsXG4gICAgY29vcmRzLFxuICAgIGV2ZW50LFxuICB9XG59XG4iXX0=