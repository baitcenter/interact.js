import drag from './drag';
import drop from './drop';
import gesture from './gesture';
import resize from './resize';
function install(scope) {
    scope.usePlugin(gesture);
    scope.usePlugin(resize);
    scope.usePlugin(drag);
    scope.usePlugin(drop);
}
const id = 'actions';
export { id, install, gesture, resize, drag, drop, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLElBQW1CLE1BQU0sUUFBUSxDQUFBO0FBQ3hDLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQTtBQUN6QixPQUFPLE9BQXlCLE1BQU0sV0FBVyxDQUFBO0FBQ2pELE9BQU8sTUFBdUIsTUFBTSxVQUFVLENBQUE7QUFFOUMsU0FBUyxPQUFPLENBQUUsS0FBWTtJQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3hCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdkIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNyQixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3ZCLENBQUM7QUFFRCxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUE7QUFFcEIsT0FBTyxFQUNMLEVBQUUsRUFDRixPQUFPLEVBQ1AsT0FBTyxFQUVQLE1BQU0sRUFFTixJQUFJLEVBRUosSUFBSSxHQUNMLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY29wZSB9IGZyb20gJ0BpbnRlcmFjdGpzL2NvcmUvc2NvcGUnXG5pbXBvcnQgZHJhZywgeyBEcmFnRXZlbnQgfSBmcm9tICcuL2RyYWcnXG5pbXBvcnQgZHJvcCBmcm9tICcuL2Ryb3AnXG5pbXBvcnQgZ2VzdHVyZSwgeyBHZXN0dXJlRXZlbnQgfSBmcm9tICcuL2dlc3R1cmUnXG5pbXBvcnQgcmVzaXplLCB7IFJlc2l6ZUV2ZW50IH0gZnJvbSAnLi9yZXNpemUnXG5cbmZ1bmN0aW9uIGluc3RhbGwgKHNjb3BlOiBTY29wZSkge1xuICBzY29wZS51c2VQbHVnaW4oZ2VzdHVyZSlcbiAgc2NvcGUudXNlUGx1Z2luKHJlc2l6ZSlcbiAgc2NvcGUudXNlUGx1Z2luKGRyYWcpXG4gIHNjb3BlLnVzZVBsdWdpbihkcm9wKVxufVxuXG5jb25zdCBpZCA9ICdhY3Rpb25zJ1xuXG5leHBvcnQge1xuICBpZCxcbiAgaW5zdGFsbCxcbiAgZ2VzdHVyZSxcbiAgR2VzdHVyZUV2ZW50LFxuICByZXNpemUsXG4gIFJlc2l6ZUV2ZW50LFxuICBkcmFnLFxuICBEcmFnRXZlbnQsXG4gIGRyb3AsXG59XG4iXX0=